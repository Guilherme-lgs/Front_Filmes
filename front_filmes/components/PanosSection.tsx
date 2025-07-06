"use client"

import { motion } from "framer-motion"
import type { Pano } from "@/app/page"
import PanoCard from "./PanoCard"

interface PanosSectionProps {
  panos: Pano[]
}

export default function PanosSection({ panos }: PanosSectionProps) {
  return (
    <section id="panos" className="py-20 bg-gradient-to-b from-gray-800 to-gray-700">
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
            <span className="text-6xl">🧽</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Produtos Panos
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubra nossa linha premium de panos e produtos de limpeza de alta qualidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {panos.map((pano, index) => (
            <motion.div
              key={pano.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PanoCard pano={pano} />
            </motion.div>
          ))}
        </div>

        {panos.length === 0 && (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center py-12">
            <p className="text-gray-400 text-lg">Nenhum produto encontrado. Verifique se a API está rodando.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
