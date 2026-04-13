import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function App() {
  const isSnap = navigator.userAgent.includes("ReactSnap");

  useEffect(() => {
    console.log("Loaded route: ", window.location.pathname);

    if (isSnap) {
      document.body.classList.add("snap");
    }
  }, [isSnap]);

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

      {/* Hidden SEO content */}
      <h1 style={{ display: "none" }}>Bikram – Full Stack Developer</h1>
      <p style={{ display: "none" }}>
        Welcome to my portfolio built with the MERN stack.
      </p>

      {/* Routes */}
      {!isSnap && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      )}
    </div>
  );
}

export default App;