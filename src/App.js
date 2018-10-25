import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./components/Index";
import About from "./components/About";
import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div
          id="main"
          className={window.location.pathname === "/" ? "bg-img" : null}
        >
          <Header
            menu={[
              { name: "Home", path: "/" },
              { name: "About me", path: "/about" },
              { name: "My projects", path: "/projects" }
            ]}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Index
                  {...props}
                  profile={{
                    name: "Manuel",
                    surname: "Soler",
                    desc:
                      "Software engineer and full-stack web developer in love with new technologies.",
                    mail: "manusoler@gmail.com",
                    linkedin: "manusoler",
                    github: "manusoler"
                  }}
                />
              )}
            />

            <Route
              exact
              path="/about"
              render={props => (
                <>
                  <About
                    {...props}
                    bio={
                      <>
                        <p>
                          Hi there! I'm Manuel Soler, software engineer and
                          full-stack developer in love with new technologies.
                        </p>
                        <p>
                          Graduated in Software Engineering in the{" "}
                          <a
                            href="https://www.ual.es"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Universidad de Almería
                          </a>{" "}
                          in 2010, I have been working since then for some
                          technology companies, developing software for clients
                          like Telefónica, Sanitas or Cajamar.
                        </p>
                        <p>
                          I am also one of the co-founders of{" "}
                          <a
                            href="https://www.deddian.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Deddian Technology S.L
                          </a>{" "}
                          making succesful projects such as{" "}
                          <a
                            href="https://www.kuicco.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Kuicco
                          </a>{" "}
                          or{" "}
                          <a
                            href="https://www.filmgack.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Filmgack
                          </a>
                          .
                        </p>
                      </>
                    }
                    skills={[
                      { name: "PHP", skill: 90 },
                      { name: "Node.js", skill: 85 },
                      { name: "React", skill: 75 },
                      { name: "React Native", skill: 70 },
                      { name: "Java", skill: 90 },
                      { name: "Python", skill: 80 }
                    ]}
                    jobs={[
                      {
                        from: 2016,
                        to: "Now",
                        company: "Deddian Technology SL",
                        desc: "Co-founder and backend developer"
                      },
                      {
                        from: 2014,
                        to: 2018,
                        company: "Teralco Group",
                        desc: "Senior Programmer"
                      },
                      {
                        from: 2010,
                        to: 2014,
                        company: "Everis",
                        desc: "Junior / Senior Programmer and Analyst"
                      },
                      {
                        from: 2008,
                        company: "Diputación de Almería",
                        desc: "Intern Programmer"
                      }
                    ]}
                  />
                  <Footer />
                </>
              )}
            />

            <Route
              exact
              path="/projects"
              render={props => (
                <>
                  <Projects
                    {...props}
                    projects={[
                      {
                        url: "https://www.kuicco.com",
                        name: "Kuicco",
                        image: "kuicco.png"
                      },
                      {
                        url: "https://www.filmgack.com",
                        name: "Filmgack",
                        image: "filmgack.png"
                      },
                      {
                        url: "https://www.boardgamefinder.net",
                        name: "BoardGameFinder",
                        image: "bgf.png"
                      },
                      {
                        url: "http://www.conectaempleo.com",
                        name: "Conecta Empleo",
                        image: "conecta.png"
                      },
                      {
                        url: "https://mhsm.msolm.es",
                        name: "Thread monitor MSHM",
                        image: "mhsm.png"
                      }
                    ]}
                  />
                  <Footer />
                </>
              )}
            />
            <Route render={props => <h1>Not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
