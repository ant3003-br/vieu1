'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiPaperAirplane, HiCheck } from 'react-icons/hi'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  honeypot: string
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    if (data.honeypot) return

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const message = `*Novo Contato - Site Advocacia*%0A%0A*Nome:* ${data.name}%0A*Email:* ${data.email}%0A*Telefone:* ${data.phone}%0A*Assunto:* ${data.subject}%0A*Mensagem:* ${data.message}`

    window.open(
      `https://wa.me/5531998498990?text=${message}`,
      '_blank',
      'nofollow noopener'
    )

    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <input
          {...register('honeypot')}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
            Nome *
          </label>
          <input
            id="name"
            {...register('name', { required: 'Nome é obrigatório' })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-primary"
            placeholder="Seu nome"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido',
              },
            })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-primary"
            placeholder="seu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
            Telefone
          </label>
          <input
            id="phone"
            {...register('phone')}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-primary"
            placeholder="(31) 99999-9999"
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
            Assunto *
          </label>
          <input
            id="subject"
            {...register('subject', { required: 'Assunto é obrigatório' })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-primary"
            placeholder="Ex: Consulta jurídica"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
          Mensagem *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message', { required: 'Mensagem é obrigatória' })}
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-primary"
          placeholder="Descreva seu caso..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full"
      >
        {submitted ? (
          <>
            <HiCheck size={20} /> Mensagem Enviada!
          </>
        ) : isSubmitting ? (
          'Enviando...'
        ) : (
          <>
            <HiPaperAirplane size={18} /> Enviar Mensagem
          </>
        )}
      </button>

      {submitted && (
        <p className="text-center text-sm text-green-600">
          Obrigado! Sua mensagem foi enviada. Responderemos em breve.
        </p>
      )}
    </form>
  )
}
