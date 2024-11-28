import { Hero, Footer, About, Sponsors } from '@/components/shared'

export default function Home() {
  return (
      <main className="overflow-hidden w-full">
          <Hero />
          <About />
          <Sponsors />
          <Footer />
      </main>
  );
}
