"use client"

import { useEffect, useState } from "react"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import FilmesSection from "@/components/FilmesSection"
import PanosSection from "@/components/PanosSection"
import FilmesPorIdSection from "@/components/FilmesPorIdSection"
import Footer from "@/components/Footer"
import LoadingSpinner from "@/components/LoadingSpinner"

// Tipos para os dados da API
export interface Filme {
  id: number
  titulo: string
  ano: number
  diretor: string
  genero: string
  sinopse: string
  poster?: string
  duracao?: number
  classificacao?: string
}

export interface Pano {
  id: number
  nome: string
  descricao: string
  categoria: string
  preco: number
  imagem?: string
  disponivel: boolean
}

export interface FilmePorId {
  id: number
  titulo: string
  detalhes: string
  avaliacoes: number
  nota: number
}

const API_BASE_URL = "http://localhost:3000"

export default function HomePage() {
  const [filmes, setFilmes] = useState<Filme[]>([])
  const [panos, setPanos] = useState<Pano[]>([])
  const [filmesPorId, setFilmesPorId] = useState<FilmePorId[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        // Fazendo as requisições para as 3 rotas da API
        const [filmesRes, panosRes, filmesIdRes] = await Promise.all([
          fetch(`${API_BASE_URL}/filmes`),
          fetch(`${API_BASE_URL}/panos`),
          fetch(`${API_BASE_URL}/filmes/id`),
        ])

        // Verificando se as respostas são válidas
        if (!filmesRes.ok || !panosRes.ok || !filmesIdRes.ok) {
          throw new Error("Erro ao buscar dados da API")
        }

        const [filmesData, panosData, filmesIdData] = await Promise.all([
          filmesRes.json(),
          panosRes.json(),
          filmesIdRes.json(),
        ])

        setFilmes(filmesData)
        setPanos(panosData)
        setFilmesPorId(filmesIdData)
      } catch (error) {
        console.error("Erro ao buscar dados:", error)
        setError("Erro ao carregar dados. Verifique se a API está rodando.")

        // Dados de fallback para demonstração
        setFilmes([
          {
            id: 1,
            titulo: "O Poderoso Chefão",
            ano: 1972,
            diretor: "Francis Ford Coppola",
            genero: "Drama/Crime",
            sinopse: "A saga de uma família mafiosa italiana-americana.",
            duracao: 175,
            classificacao: "16+",
          },
          {
            id: 2,
            titulo: "Pulp Fiction",
            ano: 1994,
            diretor: "Quentin Tarantino",
            genero: "Crime/Drama",
            sinopse: "Histórias entrelaçadas do submundo criminal.",
            duracao: 154,
            classificacao: "18+",
          },
        ])

        setPanos([
          {
            id: 1,
            nome: "Pano Premium",
            descricao: "Pano de alta qualidade para limpeza",
            categoria: "Limpeza",
            preco: 29.9,
            disponivel: true,
          },
        ])

        setFilmesPorId([
          {
            id: 1,
            titulo: "Filme Detalhado",
            detalhes: "Informações detalhadas do filme",
            avaliacoes: 1250,
            nota: 8.5,
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Header />
      <main>
        <HeroSection />
        <FilmesSection filmes={filmes} />
        <PanosSection panos={panos} />
        <FilmesPorIdSection filmesPorId={filmesPorId} />
      </main>
      <Footer />

      {error && (
        <div className="fixed bottom-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg">
          <p className="text-sm">{error}</p>
        </div>
      )}
    </div>
  )
}
