import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  budget: z.string().min(1),
  message: z.string().min(10),
})

const RATE_LIMIT_MAP = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW = 3600000 // 1 hour
const RATE_LIMIT_MAX = 5 // 5 submissions per hour per IP

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.issues },
        { status: 400 }
      )
    }

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    const now = Date.now()
    const existing = RATE_LIMIT_MAP.get(ip)

    if (existing && existing.resetAt > now) {
      if (existing.count >= RATE_LIMIT_MAX) {
        return NextResponse.json(
          { error: 'Too many submissions. Please try again later.' },
          { status: 429 }
        )
      }
      existing.count += 1
    } else {
      RATE_LIMIT_MAP.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    }

    const { firstName, lastName, email, company, budget, message } = result.data

    // Log the submission (replace with actual email/database integration)
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      company,
      budget,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: 'Message received successfully' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
