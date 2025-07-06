import "./globals.css";

// Componente de Cabeçalho
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-8 border-b border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900/80 backdrop-blur z-50 shadow-lg">
      <span className="font-bold text-2xl tracking-tight text-orange-400">🎬 Central Filmes</span>
      <nav className="space-x-8">
        <a href="#filmes" className="hover:text-orange-400 text-zinc-100 transition-colors font-medium">Filmes</a>
        <a href="#produtos" className="hover:text-orange-400 text-zinc-100 transition-colors font-medium">Produtos</a>
        <a href="#sobre" className="hover:text-orange-400 text-zinc-100 transition-colors font-medium">Sobre</a>
      </nav>
    </header>
  );
}

// Componente de Rodapé
function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 py-8 text-center text-zinc-400 text-sm bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900/80 backdrop-blur">
      <div className="flex flex-col items-center gap-2">
        <span>© {new Date().getFullYear()} Central Filmes</span>
        <span className="text-xs text-orange-400">Minimalismo e cinema</span>
      </div>
    </footer>
  );
}

// Layout principal
export const metadata = {
  title: "Central Filmes Minimal",
  description: "Descubra filmes de forma simples e elegante",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-16">
          <div className="w-full max-w-3xl bg-zinc-900/80 rounded-2xl shadow-xl p-8 border border-zinc-800">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
