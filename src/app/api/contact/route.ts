import { NextResponse } from 'next/server'
import { z } from 'zod'
import fs from 'fs'
import path from 'path'

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
  if (!serviceType) return false
  if (!details || details.length < 5) return false
  return true
})

const DATA_FILE = path.join(process.cwd(), 'data', 'form-responses.json')

function ensureDataDir() {
  const dir = path.dirname(DATA_FILE)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function readResponses(): Array<Record<string, unknown>> {
  try {
    ensureDataDir()
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, '[]', 'utf-8')
      return []
    }
    const raw = fs.readFileSync(DATA_FILE, 'utf-8')
    return JSON.parse(raw)
  } catch (err) {
    console.error('Error reading responses:', err)
    return []
  }
}

function writeResponses(data: Array<Record<string, unknown>>) {
  try {
    ensureDataDir()
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8')
  } catch (err) {
    console.error('Error writing responses:', err)
  }
}

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

    const responses = readResponses()
    responses.unshift(submission)
    writeResponses(responses)

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
  const responses = readResponses()
  return NextResponse.json(responses)
}

export async function DELETE(request: Request) {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')

  if (id) {
    const responses = readResponses()
    const filtered = responses.filter((r) => (r as { id: string }).id !== id)
    writeResponses(filtered)
    return NextResponse.json({ message: 'Deleted' })
  }

  writeResponses([])
  return NextResponse.json({ message: 'All cleared' })
}
