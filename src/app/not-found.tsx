import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="font-display text-8xl font-bold text-primary">404</h1>
        <p className="mt-4 text-xl text-gray-600">Página não encontrada</p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Voltar para Home
        </Link>
      </div>
    </section>
  )
}
