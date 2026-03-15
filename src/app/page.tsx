export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AT & Harmonies
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#termekek" className="text-gray-700 hover:text-blue-600 font-medium transition">Termékek</a>
              <a href="#akcio" className="text-gray-700 hover:text-blue-600 font-medium transition">Akció</a>
              <a href="#kapcsolat" className="text-gray-700 hover:text-blue-600 font-medium transition">Kapcsolat</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-md">
              Kosár (0)
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
          Profi eszközök
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8">
          Legjobb szerszámok profi áron. Gyors szállítás, garancia!
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 text-lg font-semibold rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
          Vásárlás most
        </button>
      </section>

      {/* Termékek */}
      <section id="termekek" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Legnépszerűbb eszközök</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-600 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Elektromos fúró</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">29.990 Ft</p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                  Kosárba
                </button>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-green-500 to-green-600 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Csavarkulcs szett</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">14.990 Ft</p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                  Kosárba
                </button>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-purple-500 to-purple-600 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-900 mb-2">LED munkalámpa</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">8.990 Ft</p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                  Kosárba
                </button>
              </div>
            </div>
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-orange-500 to-orange-600 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-900 mb-2">Kalapács</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">3.990 Ft</p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                  Kosárba
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}