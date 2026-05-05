import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'orange'
  text: string
  icon?: boolean
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  className?: string
}

export default function Button({
  variant = 'primary',
  text,
  icon = false,
  onClick,
  href,
  target,
  rel,
  className = '',
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded inline-flex items-center gap-2 transition hover:opacity-90'

  const variantStyles = {
    primary: 'bg-blue-900 text-white',
    secondary: 'bg-amber-500 text-white',
    orange: 'bg-amber-500 text-white',
  }

  const content = (
    <>
      <span className="text-lg font-normal">{text}</span>
      {icon && (
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="5.5" stroke="white" strokeWidth="1.5" />
          <line x1="6" y1="8" x2="10" y2="8" stroke="white" strokeWidth="1.5" />
          <line x1="8" y1="6" x2="8" y2="10" stroke="white" strokeWidth="1.5" />
        </svg>
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${baseStyles} ${variantStyles[variant]} ${className} no-underline`}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  )
}
