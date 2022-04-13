// export default App;
import { motion } from "framer-motion"
import './App.css';
import Header from './/components/Header';
import Footer from './/components/Footer'
import Navigation from './/components/Navigation'
import Project from './/components/Project'
import Contact from './/components/ContactForm'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div class="App">
      <Navigation />
      <Header />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
