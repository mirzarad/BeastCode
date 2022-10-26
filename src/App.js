import './App.css';
import ParticlesBg from 'particles-bg'

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'
import CodeLink from './components/CodeLink/CodeLink'
import AccordionProblems from './components/AccordionProblems/AccordionProblems'

const App = () => {



  return (
    <div className="App">
      <ParticlesBg color="#5159EE" type="cobweb" bg={true} />
      <Navbar />
      <Header />
      <AccordionProblems />
      <div className="homepage-footer"></div>
    </div>
  );
}

export default App;
