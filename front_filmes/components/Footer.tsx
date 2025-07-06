"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">🎬</span>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                Central Filmes
              </h3>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sua plataforma completa para descobrir, explorar e se conectar com o mundo do cinema.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Navegação</h4>
              <div className="space-y-2">
                {["Filmes", "Produtos", "Detalhes", "Sobre"].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    whileHover={{ color: "#f97316" }}
                    className="block text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">API Endpoints</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">/filmes</p>
                <p className="text-gray-400">/panos</p>
                <p className="text-gray-400">/filmes/id</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Tecnologias</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">Next.js + TypeScript</p>
                <p className="text-gray-400">Framer Motion</p>
                <p className="text-gray-400">TailwindCSS</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {[
              { name: "GitHub", icon: "🐙" },
              { name: "API", icon: "🔗" },
              { name: "Docs", icon: "📚" },
            ].map((social) => (
              <motion.a
                key={social.name}
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors text-2xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">© 2024 Central Filmes. Desenvolvido com ❤️ para o mundo do cinema.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
