'use client'

import { useState } from 'react'
import { siteConfig } from '@/site.config'
import { HiLockClosed, HiDownload } from 'react-icons/hi'

const clientData: Record<string, { name: string; password: string; files: string[] }> = {
  'cliente-exemplo': {
    name: 'Cliente Exemplo',
    password: '123456',
    files: ['documento-1.pdf', 'documento-2.pdf', 'contrato-assinado.pdf'],
  },
}

export default function ClientePage({ params }: { params: { slug: string } }) {
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [error, setError] = useState('')

  const client = clientData[params.slug]

  if (!client) {
    return (
      <section className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold">Cliente não encontrado</h1>
          <p className="mt-4 text-gray-600">Verifique o link de acesso.</p>
        </div>
      </section>
    )
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === client.password) {
      setAuthenticated(true)
      setError('')
    } else {
      setError('Senha incorreta. Tente novamente.')
    }
  }

  if (!authenticated) {
    return (
      <section className="flex min-h-screen items-center justify-center pt-20">
        <div className="w-full max-w-md px-4">
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <div className="mb-6 text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <HiLockClosed size={32} />
              </span>
              <h1 className="mt-4 font-display text-2xl font-bold">
                Área do Cliente
              </h1>
              <p className="mt-2 text-gray-600">
                Digite a senha para acessar seus documentos.
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-center text-lg outline-none transition-colors focus:border-primary"
                  autoFocus
                />
              </div>
              {error && (
                <p className="text-center text-sm text-red-500">{error}</p>
              )}
              <button type="submit" className="btn-primary w-full">
                Acessar
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative pt-32 pb-20">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <h1 className="font-display text-2xl font-bold">
              Olá, {client.name}!
            </h1>
            <p className="mt-2 text-gray-600">
              Seus documentos disponíveis para download:
            </p>

            <div className="mt-8 space-y-3">
              {client.files.map((file) => (
                <a
                  key={file}
                  href="#"
                  className="flex items-center justify-between rounded-xl border border-gray-200 p-4 transition-colors hover:border-primary/30 hover:bg-gray-50"
                >
                  <span className="text-gray-700">{file}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <HiDownload size={20} />
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              {siteConfig.name} - {siteConfig.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
