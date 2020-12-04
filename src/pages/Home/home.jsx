import About from '../../components/About/about';
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
    </div>
  );
};

export default Home;
