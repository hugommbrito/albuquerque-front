export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Bem-vindo à Albuquerque
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Realizando sonhos através de construções de qualidade
            </p>
            <div className="prose max-w-none">
              <p className="text-gray-700">
                A Albuquerque é uma empresa dedicada a transformar seus sonhos em realidade.
                Explore nosso site para conhecer nossos projetos, nossa história e descobrir
                como podemos ajudar você a realizar o seu sonho.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
