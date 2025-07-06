"use client"

import { motion } from "framer-motion"
import type { FilmePorId } from "@/app/page"

interface FilmePorIdCardProps {
  filme: FilmePorId
}

export default function FilmePorIdCard({ filme }: FilmePorIdCardProps) {
  const renderStars = (nota: number) => {
    const stars = []
    const fullStars = Math.floor(nota / 2)
    const hasHalfStar = nota % 2 >= 1

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400 text-xl">
          ★
        </span>,
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400 text-xl">
          ☆
        </span>,
      )
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-600 text-xl">
          ☆
        </span>,
      )
    }

    return stars
  }

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {filme.id}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{filme.titulo}</h3>
            <p className="text-gray-400 text-sm">ID: #{filme.id}</p>
          </div>
        </div>

        <div className="text-right">
          <div className="flex items-center space-x-1 mb-1">{renderStars(filme.nota)}</div>
          <p className="text-yellow-400 font-bold text-lg">{filme.nota}/10</p>
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">{filme.detalhes}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <span className="text-blue-400">👥</span>
            <span>{filme.avaliacoes.toLocaleString()} avaliações</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors"
          >
            <span>❤️</span>
            <span className="text-sm">Favoritar</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-600 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200"
          >
            Ver Mais →
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
