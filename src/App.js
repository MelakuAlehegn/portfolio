import './App.css';
import Header from './components/Header/Header';
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
