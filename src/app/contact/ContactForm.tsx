'use client'

import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ArrowRight } from '@phosphor-icons/react'
import { toast, Toaster } from 'sonner'

const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  company: z.string().optional(),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Please provide more details about your project'),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success('Message sent successfully! We will get back to you within 24 hours.')
        reset()
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch {
      toast.error('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <Toaster theme="dark" position="bottom-right" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <div className="p-[2px] rounded-[1.25rem] bg-white/[0.02] border border-white/5 focus-within:border-white/20 transition-colors">
              <input
                type="text"
                placeholder="First Name"
                {...register('firstName')}
                className="w-full h-full bg-[#0A0A0A] rounded-[calc(1.25rem-2px)] px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                aria-label="First name"
              />
            </div>
            {errors.firstName && <span className="text-red-400 text-xs px-2">{errors.firstName.message}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <div className="p-[2px] rounded-[1.25rem] bg-white/[0.02] border border-white/5 focus-within:border-white/20 transition-colors">
              <input
                type="text"
                placeholder="Last Name"
                {...register('lastName')}
                className="w-full h-full bg-[#0A0A0A] rounded-[calc(1.25rem-2px)] px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                aria-label="Last name"
              />
            </div>
            {errors.lastName && <span className="text-red-400 text-xs px-2">{errors.lastName.message}</span>}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="p-[2px] rounded-[1.25rem] bg-white/[0.02] border border-white/5 focus-within:border-white/20 transition-colors">
            <input
              type="email"
              placeholder="Email Address"
              {...register('email')}
              className="w-full h-full bg-[#0A0A0A] rounded-[calc(1.25rem-2px)] px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
              aria-label="Email address"
            />
          </div>
          {errors.email && <span className="text-red-400 text-xs px-2">{errors.email.message}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <div className="p-[2px] rounded-[1.25rem] bg-white/[0.02] border border-white/5 focus-within:border-white/20 transition-colors">
            <input
              type="text"
              placeholder="Company (optional)"
              {...register('company')}
              className="w-full h-full bg-[#0A0A0A] rounded-[calc(1.25rem-2px)] px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
              aria-label="Company name"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="p-[2px] rounded-[1.25rem] bg-white/[0.02] border border-white/5 focus-within:border-white/20 transition-colors">
            <select
              {...register('budget')}
              defaultValue=""
              className="w-full h-full bg-[#0A0A0A] rounded-[calc(1.25rem-2px)] px-6 py-4 text-white/50 text-sm focus:outline-none appearance-none focus:ring-1 focus:ring-emerald-500/50"
              aria-label="Project budget"
            >
              <option value="" disabled>Select Budget Range...</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k+">$50,000+</option>
            </select>
          </div>
          {errors.budget && <span className="text-red-400 text-xs px-2">{errors.budget.message}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <div className="p-[2px] rounded-[2rem] bg-white/[0.02] border border-white/5 focus-within:border-white/20 transition-colors">
            <textarea
              rows={4}
              placeholder="Tell us about your project..."
              {...register('message')}
              className="w-full h-full bg-[#0A0A0A] rounded-[calc(2rem-2px)] px-6 py-6 text-white placeholder-white/30 text-sm focus:outline-none resize-none focus:ring-1 focus:ring-emerald-500/50"
              aria-label="Project details"
            />
          </div>
          {errors.message && <span className="text-red-400 text-xs px-2">{errors.message.message}</span>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full relative flex items-center justify-between gap-6 px-8 py-5 rounded-full bg-white text-black mt-10 active:scale-[0.98] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="font-semibold text-[11px] uppercase tracking-[0.2em]">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </span>
          <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-black/20 group-hover:scale-110 group-hover:translate-x-1">
            <ArrowRight weight="bold" className="w-4 h-4" />
          </div>
        </button>
      </form>
    </div>
  )
}
