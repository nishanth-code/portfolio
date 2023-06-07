
import './App.scss'
import About from './components/about/about.tsx'
import Navbar from './components/navbar/navbar.tsx'
import Header from './components/header/header.tsx'
import Work from './components/work/work.tsx'

function App() {
  

  return (
    <div className="app">
       <Navbar />
       <Header />
      <About />
      <Work />
    
  </div>
  );
};

export default App;
