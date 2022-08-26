// Importing components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SkillsOne from './components/SkillsOne';
import SkillsTwo  from './components/SkillsTwo';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

// Importing CSS file
import './App.css';

const App = () => {
  return (
    <h1 className="">
      <Header />
      <Hero/>
      <SkillsOne />
      <About/>
      <SkillsTwo />
      <Portfolio />
      <Footer />
    </h1>
  );
}

export default App;
