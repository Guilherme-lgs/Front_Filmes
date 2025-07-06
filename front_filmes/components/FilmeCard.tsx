"use client"

import { motion } from "framer-motion"
import type { Filme } from "@/app/page"

interface FilmeCardProps {
  filme: Filme
}

export default function FilmeCard({ filme }: FilmeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-700 transition-all duration-300 overflow-hidden relative group"
    >
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Poster Placeholder */}
        <div className="relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-gray-700 to-gray-600 h-64 flex items-center justify-center">
          {filme.poster ? (
            <img
              src={filme.poster || "/placeholder.svg"}
              alt={filme.titulo}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="text-center">
              <span className="text-4xl mb-2 block">🎬</span>
              <span className="text-gray-400 text-sm">Poster não disponível</span>
            </div>
          )}

          {/* Year Badge */}
          <div className="absolute top-2 right-2 bg-red-600/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-white text-sm font-bold">{filme.ano}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{filme.titulo}</h3>
            <p className="text-orange-400 text-sm font-medium">{filme.genero}</p>
          </div>

          <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">{filme.sinopse}</p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Dir: {filme.diretor}</span>
            {filme.duracao && <span>{filme.duracao} min</span>}
          </div>

          {filme.classificacao && (
            <div className="flex items-center justify-between">
              <span className="bg-orange-600/20 text-orange-400 px-2 py-1 rounded text-xs font-medium">
                {filme.classificacao}
              </span>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200"
              >
                Ver Detalhes
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
