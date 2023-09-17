
import './App.scss'
import About from './components/about/about.tsx'
import Navbar from './components/navbar/navbar.tsx'
import Header from './components/header/header.tsx'
import Work from './components/work/work.tsx'
import Skills from './components/skills/skill.tsx'
function App() {
  

  return (
    <div className="app">
       <Navbar />
       <Header />
      <About />
      <Work />
      <Skills />
    
  </div>
  );
};

export default App;
