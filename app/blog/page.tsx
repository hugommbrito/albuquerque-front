export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Novidades, dicas e informações do mercado imobiliário
            </p>
            <div className="prose max-w-none">
              <p className="text-gray-700">
                Acompanhe as últimas notícias, tendências do mercado imobiliário e dicas
                importantes para você que está em busca do seu imóvel ideal.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
