import './../css/NavBar.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './../pages/Home'
import { About } from './../pages/About'
import { Projects } from './../pages/Projects'
import { Contact } from './../pages/Contact'
import { ErrorPage } from './../pages/ErrorPage'

export function NavBar() {
  return (
    <div className="page">
      <Router>
        <nav id="nav">
          <div className='nav left'>
            <span class="gradient skew"><h1 class="logo un-skew"><Link to="/"> Add LOGO </Link></h1></span>
            <button id="menu" class="btn-nav"><span class="fas fa-bars"></span></button>
          </div>

          <div className="nav right">
            <Link to="/" className="nav-link active"><span className="nav-link-span"><span className="u-nav"> Home </span></span></Link>
            <Link to="/about" className="nav-link"><span className="nav-link-span"><span className="u-nav"> About </span></span></Link>
            <Link to="/projects" className="nav-link"><span className="nav-link-span"><span className="u-nav"> Projects </span></span></Link>
            <Link to="/contact" className="nav-link"><span className="nav-link-span"><span className="u-nav"> Contact </span></span></Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="*" element={ <ErrorPage /> } />
        </Routes>
        <footer className='nav-footer'>
          <nav>
            <Link to="" className='Link'> <img src="" alt="Github"/> </Link>
          </nav>
        </footer>
      </Router>
    </div>
  );
}
