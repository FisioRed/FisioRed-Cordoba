import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>Fisio Red Córdoba</title>
      </Head>

      <header className="flex items-center justify-between p-6 shadow-md">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Fisio Red Córdoba" className="h-16 w-auto" />
          <div>
            <h1 className="text-2xl font-bold">Fisio Red Córdoba</h1>
            <p className="text-sm italic">“La red que fortalece la fisioterapia cordobesa”</p>
          </div>
        </div>
      </header>

      <main className="p-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Conectando profesionales, compartiendo saberes</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Fisio Red Córdoba es una comunidad de fisioterapeutas unida para fortalecer la profesión,
          compartir recursos, y brindar un mejor servicio a toda la región.
        </p>
      </main>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
        {[
          { title: 'Últimos Tips', text: 'Consejos útiles para mejorar tu práctica.' },
          { title: 'Eventos Próximos', text: 'Charlas, talleres y encuentros.' },
          { title: 'Chistes y Humor', text: '¡Reír también es salud!' },
          { title: 'Práctica Basada en la Evidencia', text: 'Artículos y recursos científicos.' }
        ].map(({ title, text }) => (
          <div key={title} className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{text}</p>
          </div>
        ))}
      </section>

      <footer className="bg-gray-100 p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Fisio Red Córdoba. Todos los derechos reservados.
      </footer>
    </div>
  )
}