"use client"

import { motion } from "framer-motion"
import type { Pano } from "@/app/page"

interface PanoCardProps {
  pano: Pano
}

export default function PanoCard({ pano }: PanoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
      className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-600 transition-all duration-300 overflow-hidden relative group"
    >
      {/* Availability Indicator */}
      <div
        className={`absolute top-4 right-4 w-3 h-3 rounded-full ${pano.disponivel ? "bg-green-500" : "bg-red-500"} animate-pulse`}
      />

      <div className="relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-orange-200 to-yellow-200 h-48 flex items-center justify-center">
        {pano.imagem ? (
          <img
            src={pano.imagem || "/placeholder.svg"}
            alt={pano.nome}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="text-center">
            <span className="text-6xl mb-2 block text-orange-600">🧽</span>
            <span className="text-gray-600 text-sm">Imagem não disponível</span>
          </div>
        )}

        {/* Price Badge */}
        <div className="absolute bottom-2 left-2 bg-orange-600/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-white text-sm font-bold">R$ {pano.preco.toFixed(2)}</span>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{pano.nome}</h3>
          <span className="inline-block bg-orange-600/20 text-orange-400 text-xs px-2 py-1 rounded-full mb-2">
            {pano.categoria}
          </span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed">{pano.descricao}</p>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${pano.disponivel ? "bg-green-500" : "bg-red-500"}`} />
            <span className={`text-sm ${pano.disponivel ? "text-green-400" : "text-red-400"}`}>
              {pano.disponivel ? "Disponível" : "Indisponível"}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!pano.disponivel}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              pano.disponivel
                ? "bg-gradient-to-r from-orange-600 to-yellow-600 text-white hover:shadow-lg"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
          >
            {pano.disponivel ? "Comprar" : "Indisponível"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
