// export default App;
import { motion } from "framer-motion"
import './App.css';
import Header from './/components/Header';
import Footer from './/components/Footer'
import Navigation from './/components/Navigation'
import Project from './/components/Project'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
