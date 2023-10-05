import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <Section
        title="Sección 1"
        content="Contenido de la primera sección."
        backgroundColor="lightblue"
        imageSrc={require('./imgs/iceCreamVanilla.png')}
        imagePosition="right"
        textPosition="left"
      />
      <Section
        title="Sección 2"
        content="Contenido de la segunda sección."
        backgroundColor="lightgreen"
        imageSrc={require('./imgs/iceCreamPop.png')}
        imagePosition="left"
        textPosition="right"
      />
      <Section
        title="Sección 3"
        content="Contenido de la tercera sección."
        backgroundColor="lightpink"
        imageSrc={require('./imgs/iceCreamYogurtNB.png')}
        imagePosition="right"
        textPosition="left"
      />
      <Footer/>
    </div>
  );
}

export default App;
