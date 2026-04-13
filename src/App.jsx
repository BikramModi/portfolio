
import './App.css';



import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skeleton from './components/Skeleton';
import Example from './reactboots/Example';
import { Route, Routes } from 'react-router-dom';

import Myfirst from './components/Myfirst';
import LoginModal from './components/login/LoginModal';
import Slideshow from './components/slide/Slideshow';
import PopupForm from './components/popup/PopupForm';

import { useEffect } from 'react';

import { Helmet } from 'react-helmet';

function App() {


  const isSnap = navigator.userAgent === 'ReactSnap';



  useEffect(() => {
    console.log('Loaded route: ', window.location.pathname);
  }, []);


  return (
    <div className="App">
<Helmet>
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Bikram Portfolio",
      "url": "https://www.bikramportfolio.ooguy.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.bikramportfolio.ooguy.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
    `}
  </script>

  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Bikram Kumar",
      "url": "https://www.bikramportfolio.ooguy.com",
      "sameAs": [
        "https://github.com/myfirstapp111"
       
      ],
      "jobTitle": "Full Stack Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
      "image": "https://www.bikramportfolio.ooguy.com/favicon.ico",
      "description": "Bikram Kumar is a MERN stack developer specializing in building full-stack web applications using React, Node.js, Express, and MongoDB."
    }
    `}
  </script>
</Helmet>


      <h1 style={{ display: "none" }}>Bikram – Full Stack Developer</h1> <br/>
      <p style={{ display: "none" }}>Welcome to my portfolio built with the MERN stack.</p>
      <a href="/projects" style={{ display: "none" }}>Projects</a> {/* for crawlers */}
      <a href="/resume" style={{ display: "none" }}>Resume</a> {/* for crawlers */}

      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>



    </div>
  );
}

export default App;
