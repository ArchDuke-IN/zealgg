import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

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

const submissions: Array<Record<string, unknown>> = []

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

async function sendEmailNotification(submission: Record<string, unknown>) {
  if (!resend) {
    console.log('Resend API key not set. Email notification skipped.')
    console.log('Add RESEND_API_KEY to your .env.local or Vercel environment variables.')
    return
  }

  try {
    await resend.emails.send({
      from: 'ZEAL MEDIA <onboarding@resend.dev>',
      to: [process.env.NOTIFICATION_EMAIL || 'your-email@example.com'], // Replace with your email
      subject: `New Contact Form Submission from ${submission.firstName} ${submission.lastName}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #34d399;">New Lead — ZEAL MEDIA</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666;">Name</td><td style="padding: 8px 0; font-weight: bold;">${submission.firstName} ${submission.lastName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${submission.email}">${submission.email}</a></td></tr>
            ${submission.company ? `<tr><td style="padding: 8px 0; color: #666;">Company</td><td style="padding: 8px 0;">${submission.company}</td></tr>` : ''}
            <tr><td style="padding: 8px 0; color: #666;">Service</td><td style="padding: 8px 0;">${submission.budget}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Message</td><td style="padding: 8px 0;">${submission.message}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Submitted</td><td style="padding: 8px 0;">${new Date(submission.submittedAt as string).toLocaleString()}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="color: #999; font-size: 12px;">View all submissions at <a href="https://zealmedia.info/admin/responses">zealmedia.info/admin/responses</a></p>
        </div>
      `,
    })
    console.log('Email notification sent successfully')
  } catch (error) {
    console.error('Failed to send email notification:', error)
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

    submissions.unshift(submission)

    sendEmailNotification(submission)

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
    const idx = submissions.findIndex((r) => (r as { id: string }).id !== id)
    if (idx !== -1) submissions.splice(idx, 1)
    return NextResponse.json({ message: 'Deleted' })
  }

  submissions.length = 0
  return NextResponse.json({ message: 'All cleared' })
}
