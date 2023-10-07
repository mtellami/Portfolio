import './App.css'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import About from './component/About/About'
import Projects from './component/Projects/Projects'
import Contact from './component/Contact/Contact'
import Footer from  './component/Footer/Footer'

function App() {
  return (
    <>
			<Navbar />
			<Home />
			<About />
			<Projects />
			<Contact />
			<Footer />
    </>
  )
}

export default App
