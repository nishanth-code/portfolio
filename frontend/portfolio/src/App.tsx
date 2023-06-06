
import './App.scss'
import About from './components/about/about.tsx'
import Navbar from './components/navbar/navbar.tsx'
import Header from './components/header/header.tsx'
import SocialMedia from './components/socialmedia.tsx'

function App() {
  

  return (
    <div className="app">
       <Navbar />
       <Header />
      <About />
    
  </div>
  );
};

export default App;
