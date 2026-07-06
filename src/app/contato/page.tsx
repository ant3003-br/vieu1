import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import { siteConfig } from '@/site.config'
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'

export const metadata: Metadata = {
  title: 'Contato',
  description: `Entre em contato com ${siteConfig.name}. WhatsApp, telefone, email e endereço em ${siteConfig.location}.`,
}

export default function ContatoPage() {
  return (
    <>
      <section className="relative pt-32 pb-20">
        <div className="container-custom">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Fale Conosco
            </span>
            <h1 className="section-title mt-2">Entre em Contato</h1>
            <p className="section-subtitle mx-auto">
              Estamos prontos para atender você.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl bg-secondary p-8 text-white">
                <h2 className="font-display text-2xl font-semibold">
                  Informações de Contato
                </h2>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent">
                      <HiPhone size={22} />
                    </span>
                    <div>
                      <h3 className="font-medium">Telefone / WhatsApp</h3>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="mt-1 block text-gray-400 transition-colors hover:text-accent"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent">
                      <HiMail size={22} />
                    </span>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="mt-1 block text-gray-400 transition-colors hover:text-accent"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent">
                      <HiLocationMarker size={22} />
                    </span>
                    <div>
                      <h3 className="font-medium">Localização</h3>
                      <p className="mt-1 text-gray-400">{siteConfig.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent">
                      <HiClock size={22} />
                    </span>
                    <div>
                      <h3 className="font-medium">Horário de Atendimento</h3>
                      <p className="mt-1 text-gray-400">{siteConfig.hours.week}</p>
                      <p className="text-gray-400">{siteConfig.hours.saturday}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15003.123456789!2d-44.123456!3d-19.987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzE1LjYiUyA0NMKwMDcnMjIuNyJX!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do escritório"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
