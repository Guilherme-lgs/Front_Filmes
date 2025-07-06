"use client"

import { motion } from "framer-motion"
import type { FilmePorId } from "@/app/page"
import FilmePorIdCard from "./FilmePorIdCard"

interface FilmesPorIdSectionProps {
  filmesPorId: FilmePorId[]
}

export default function FilmesPorIdSection({ filmesPorId }: FilmesPorIdSectionProps) {
  return (
    <section id="detalhes" className="py-20 bg-gradient-to-b from-gray-700 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-6xl">📊</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
            Detalhes dos Filmes
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Informações detalhadas, avaliações e estatísticas dos nossos filmes em destaque
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filmesPorId.map((filme, index) => (
            <motion.div
              key={filme.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FilmePorIdCard filme={filme} />
            </motion.div>
          ))}
        </div>

        {filmesPorId.length === 0 && (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center py-12">
            <p className="text-gray-400 text-lg">Nenhum detalhe encontrado. Verifique se a API está rodando.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
