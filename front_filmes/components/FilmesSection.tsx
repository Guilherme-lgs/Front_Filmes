"use client"

import { motion } from "framer-motion"
import type { Filme } from "@/app/page"
import FilmeCard from "./FilmeCard"

interface FilmesSectionProps {
  filmes: Filme[]
}

export default function FilmesSection({ filmes }: FilmesSectionProps) {
  return (
    <section id="filmes" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
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
            <span className="text-6xl">🎭</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Catálogo de Filmes
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore nossa coleção cuidadosamente selecionada dos melhores filmes de todos os tempos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filmes.map((filme, index) => (
            <motion.div
              key={filme.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FilmeCard filme={filme} />
            </motion.div>
          ))}
        </div>

        {filmes.length === 0 && (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center py-12">
            <p className="text-gray-400 text-lg">Nenhum filme encontrado. Verifique se a API está rodando.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
