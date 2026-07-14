import { useState, type FormEvent } from 'react'
import { CheckCircle, Phone, SpinnerGap } from '@phosphor-icons/react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { InputField, SelectField, TextareaField } from '../ui/Field'
import { restaurant } from '../../data/restaurant'

const timeSlots = [
  '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM',
]

interface FormState {
  name: string
  phone: string
  email: string
  date: string
  time: string
  guests: string
  requests: string
}

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  guests: '2',
  requests: '',
}

type Errors = Partial<Record<keyof FormState, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[+()\d][\d\s().-]{6,}$/

function todayISO() {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().split('T')[0]
}

export function Reservation() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function validate(): Errors {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.phone.trim()) next.phone = 'Please enter a phone number.'
    else if (!phonePattern.test(form.phone.trim())) next.phone = 'Please enter a valid phone number.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!emailPattern.test(form.email.trim())) next.email = 'Please enter a valid email address.'
    if (!form.date) next.date = 'Please choose a date.'
    else if (form.date < todayISO()) next.date = 'Please choose a date in the future.'
    if (!form.time) next.time = 'Please choose a time.'
    if (!form.guests || Number(form.guests) < 1) next.guests = 'Please choose your party size.'
    return next
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      const firstErrorKey = Object.keys(nextErrors)[0]
      const field = document.getElementById(`res-${firstErrorKey}`)
      field?.focus()
      return
    }

    setStatus('submitting')
    window.setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('tinys-reservations') ?? '[]')
        localStorage.setItem(
          'tinys-reservations',
          JSON.stringify([...existing, { ...form, submittedAt: new Date().toISOString() }]),
        )
      } catch {
        /* localStorage unavailable — safe to ignore, reservation still "succeeds" client-side */
      }
      setStatus('success')
    }, 900)
  }

  function handleReset() {
    setForm(initialState)
    setErrors({})
    setStatus('idle')
  }

  return (
    <section id="reservation" className="bg-cream-alt py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="Reserve a Table"
            title="Save Your Seat at Tiny's"
            description="Fill out the form and our team will confirm your reservation by phone or email within one business hour during service."
            className="sm:mx-0"
          />
          <div className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rust/10 text-rust">
              <Phone size={20} weight="fill" aria-hidden />
            </span>
            <div className="text-sm">
              <p className="font-semibold text-ink">Prefer to book by phone?</p>
              <a href={`tel:${restaurant.phone.tel}`} className="font-semibold text-rust hover:underline">
                {restaurant.phone.display}
              </a>
            </div>
          </div>
          <p className="text-sm text-ink-soft">
            Parties of 6 or more, please call directly so we can prepare the right table for your group.
          </p>
          <p className="text-sm text-ink-soft">
            We're closed Mondays, and open 7:00 AM – 8:30 PM Tuesday through Saturday, and 8:00 AM – 4:00 PM
            on Sundays.
          </p>
        </div>

        <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(42,29,21,0.2)] sm:p-8">
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center animate-fade-in">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                <CheckCircle size={36} weight="fill" aria-hidden />
              </span>
              <h3 className="font-display text-2xl font-bold text-ink">Reservation Requested!</h3>
              <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
                Thanks, {form.name.split(' ')[0]}. We've received your request for {form.guests}{' '}
                {Number(form.guests) === 1 ? 'guest' : 'guests'} on {form.date} at {form.time}. We'll
                confirm by phone or email shortly.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-2 cursor-pointer text-sm font-semibold text-rust hover:underline"
              >
                Make another reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <InputField
                  label="Full Name"
                  id="res-name"
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  error={errors.name}
                />
                <InputField
                  label="Phone Number"
                  id="res-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="(978) 555-0142"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  error={errors.phone}
                />
              </div>

              <InputField
                label="Email Address"
                id="res-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                error={errors.email}
              />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <InputField
                  label="Date"
                  id="res-date"
                  name="date"
                  type="date"
                  required
                  min={todayISO()}
                  value={form.date}
                  onChange={(e) => update('date', e.target.value)}
                  error={errors.date}
                />
                <SelectField
                  label="Time"
                  id="res-time"
                  name="time"
                  required
                  value={form.time}
                  onChange={(e) => update('time', e.target.value)}
                  error={errors.time}
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </SelectField>
                <SelectField
                  label="Guests"
                  id="res-guests"
                  name="guests"
                  required
                  value={form.guests}
                  onChange={(e) => update('guests', e.target.value)}
                  error={errors.guests}
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </SelectField>
              </div>

              <TextareaField
                label="Special Requests"
                id="res-requests"
                name="requests"
                rows={3}
                hint="Allergies, seating preferences, celebrations — let us know."
                value={form.requests}
                onChange={(e) => update('requests', e.target.value)}
              />

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-2 inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-rust px-6 py-3 text-base font-semibold text-cream-text shadow-[0_4px_14px_-4px_rgba(156,61,24,0.5)] transition-all duration-200 hover:bg-rust-dark disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <>
                    <SpinnerGap size={20} className="animate-spin" aria-hidden />
                    Submitting...
                  </>
                ) : (
                  'Request Reservation'
                )}
              </button>
              <p className="text-center text-xs text-ink-soft">{restaurant.reservationNote}</p>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}
