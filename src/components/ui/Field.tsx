import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { WarningCircle } from '@phosphor-icons/react'

const fieldBase =
  'w-full rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-ink-soft/50 transition-colors focus:outline-none focus:ring-2 focus:ring-rust/40 min-h-11'

function FieldWrapper({
  label,
  id,
  required,
  error,
  hint,
  children,
}: {
  label: string
  id: string
  required?: boolean
  error?: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label} {required && <span className="text-rust">*</span>}
      </label>
      {children}
      {hint && !error && <span className="text-xs text-ink-soft">{hint}</span>}
      {error && (
        <span id={`${id}-error`} role="alert" className="flex items-center gap-1 text-xs font-medium text-red-700">
          <WarningCircle size={14} weight="bold" aria-hidden />
          {error}
        </span>
      )}
    </div>
  )
}

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  id: string
  error?: string
  hint?: string
}

export function InputField({ label, id, error, hint, required, className = '', ...rest }: InputFieldProps) {
  return (
    <FieldWrapper label={label} id={id} required={required} error={error} hint={hint}>
      <input
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldBase} ${error ? 'border-red-400' : 'border-ink/15'} ${className}`}
        {...rest}
      />
    </FieldWrapper>
  )
}

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  id: string
  error?: string
  hint?: string
}

export function TextareaField({ label, id, error, hint, required, className = '', ...rest }: TextareaFieldProps) {
  return (
    <FieldWrapper label={label} id={id} required={required} error={error} hint={hint}>
      <textarea
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldBase} resize-none ${error ? 'border-red-400' : 'border-ink/15'} ${className}`}
        {...rest}
      />
    </FieldWrapper>
  )
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  id: string
  error?: string
  hint?: string
  children: React.ReactNode
}

export function SelectField({ label, id, error, hint, required, className = '', children, ...rest }: SelectFieldProps) {
  return (
    <FieldWrapper label={label} id={id} required={required} error={error} hint={hint}>
      <select
        id={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${fieldBase} cursor-pointer ${error ? 'border-red-400' : 'border-ink/15'} ${className}`}
        {...rest}
      >
        {children}
      </select>
    </FieldWrapper>
  )
}
