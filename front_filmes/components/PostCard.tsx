"use client"

import { motion } from "framer-motion"
import type { Post } from "@/app/page"

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
          {post.userId}
        </div>
        <div className="ml-3">
          <p className="text-sm text-gray-600">Usuário #{post.userId}</p>
          <p className="text-xs text-gray-500">Post #{post.id}</p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-4 capitalize leading-tight">{post.title}</h3>

      <p className="text-gray-600 leading-relaxed mb-6">{post.body}</p>

      <div className="flex items-center justify-between">
        <div className="flex space-x-4 text-sm text-gray-500">
          <button className="flex items-center hover:text-blue-600 transition-colors">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            Curtir
          </button>
          <button className="flex items-center hover:text-blue-600 transition-colors">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
            Comentar
          </button>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
        >
          Ler mais →
        </motion.button>
      </div>
    </motion.article>
  )
}
