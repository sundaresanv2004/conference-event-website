import {Navbar, Hero, Footer, About, Sponsors} from '@/components/shared'

export default function Home() {
  return (
      <main className="overflow-hidden w-full">
          <Navbar/>
          <Hero />
          <About />
          <Sponsors />
          <Footer />
      </main>
  );
}
