import "./App.css";
import Header from "./MyComponents/Header";
import About from "./MyComponents/About";
import Skills from "./MyComponents/Skills";
import Projects from "./MyComponents/Projects";
import ContactUs from "./MyComponents/ContactUs";
import Footer from "./MyComponents/Footer";
import Home from "./MyComponents/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="Home">
          <Home />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="ContactUs">
          <ContactUs />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;