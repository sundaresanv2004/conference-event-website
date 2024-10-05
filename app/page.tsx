import { Navbar, Hero, Footer } from '@/components/shared'

export default function Home() {
  return (
      <main className="overflow-hidden w-full">
          <Navbar/>
          <Hero />
          <Footer />
      </main>
  );
}
