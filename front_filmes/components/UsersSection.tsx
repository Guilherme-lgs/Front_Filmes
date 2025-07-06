"use client"

import { motion } from "framer-motion"
import type { User } from "@/app/page"
import UserCard from "./UserCard"

interface UsersSectionProps {
  users: User[]
}

export default function UsersSection({ users }: UsersSectionProps) {
  return (
    <section id="users" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Usuários
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça nossa comunidade de usuários ativos e suas informações
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <UserCard user={user} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
