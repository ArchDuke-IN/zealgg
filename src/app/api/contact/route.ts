import { NextResponse } from 'next/server'
import { z } from 'zod'
import fs from 'fs'
import path from 'path'

const contactSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10).or(z.string().optional()),
  protocolType: z.string().optional(),
  specifics: z.string().optional(),
})

const RATE_LIMIT_MAP = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW = 3600000
const RATE_LIMIT_MAX = 5

function getResponsesFilePath() {
  return path.join(process.cwd(), 'data', 'form-responses.json')
}

function readResponses() {
  const filePath = getResponsesFilePath()
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2))
      return []
    }
    const data = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

function saveResponse(response: Record<string, unknown>) {
  const filePath = getResponsesFilePath()
  const responses = readResponses()
  responses.unshift(response)
  fs.writeFileSync(filePath, JSON.stringify(responses, null, 2))
}

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

    const data = result.data
    const submission = {
      id: Date.now().toString(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      company: data.company || '',
      budget: data.budget || data.protocolType || '',
      message: data.message || data.specifics || '',
      submittedAt: new Date().toISOString(),
      ip,
    }

    saveResponse(submission)

    console.log('Contact form submission saved:', submission)

    return NextResponse.json(
      { message: 'Message received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  const responses = readResponses()
  return NextResponse.json(responses)
}

export async function DELETE(request: Request) {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')

  if (id) {
    const responses = readResponses()
    const filtered = responses.filter((r: { id: string }) => r.id !== id)
    fs.writeFileSync(getResponsesFilePath(), JSON.stringify(filtered, null, 2))
    return NextResponse.json({ message: 'Deleted' })
  }

  fs.writeFileSync(getResponsesFilePath(), JSON.stringify([], null, 2))
  return NextResponse.json({ message: 'All cleared' })
}
