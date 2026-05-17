import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  protocolType: z.string().optional(),
  specifics: z.string().optional(),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
}).refine((data) => {
  const serviceType = data.protocolType || data.budget
  const details = data.specifics || data.message
  if (!serviceType) return { error: 'Please select a service or budget' }
  if (!details || details.length < 5) return { error: 'Please provide project details' }
  return { success: true }
})

const submissions: Array<Record<string, unknown>> = []

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Received form submission:', JSON.stringify(body, null, 2))

    const result = contactSchema.safeParse(body)

    if (!result.success) {
      console.error('Validation failed:', result.error.issues)
      const firstError = result.error.issues[0]?.message || 'Invalid form data'
      return NextResponse.json(
        { error: firstError, details: result.error.issues },
        { status: 400 }
      )
    }

    const data = result.data
    const ip = request.headers.get('x-forwarded-for') || 'unknown'

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

    submissions.unshift(submission)
    console.log('Submission saved:', submission.id)

    return NextResponse.json(
      { message: 'Message received successfully', id: submission.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(submissions)
}

export async function DELETE(request: Request) {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')

  if (id) {
    const idx = submissions.findIndex((r) => r.id === id)
    if (idx !== -1) submissions.splice(idx, 1)
    return NextResponse.json({ message: 'Deleted' })
  }

  submissions.length = 0
  return NextResponse.json({ message: 'All cleared' })
}
