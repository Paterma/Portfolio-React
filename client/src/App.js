// export default App;
import './App.css';
import Header from './/components/Header';
import Navigation from './/components/Navigation';
import Project from './/components/Project';
import Contact from './/components/ContactForm';
import Footer from './/components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react';

function App() {

const pages=["About", "Work", "Contact Me"]
const [page, setPage] = useState(pages[0])
console.log(page)
  return (

<div className="App">
<Navigation pages={pages} page={page} setPage={setPage} />
{page==="About"? <Header /> :null}
{page==="Work"? <Project /> :null}
{page==="Contact Me"? <Contact /> :null}
<Footer />
</div>
  );
}

export default App;


    // <div class="App">
    //   <Navigation />
    //   <Header />
    //   <Project />
    //   <Contact />
    //   <Footer />
    // </div>