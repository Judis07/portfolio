import About from '../../components/About/about';
import ContactSection from '../../components/ContactSection/contactSection';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Hero from '../../components/Hero/hero';
import Projects from '../../components/Projects/projects';
import Skills from '../../components/Skills/skills';

const Home = () => {
  return (
    <div className="app">

      <Header />
      <Hero />
      <About />

      <Projects />
      <Skills />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
