import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestLocations from './components/BestLocations';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BestLocations />
      <Experience />
      <Blog />
      <Testimonial />
      <Footer />
    </main>
  );
}
