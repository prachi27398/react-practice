import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import './App.css';
import './component/Appform.css';

function App() {
  return (
    <div className="App">
        <Header/>
          <main className="headerfunc">
            <section className="columns">Section1</section>
            <section className="columns">Section2</section>
            <section className="columns">Section3</section>
          </main>
        <Footer/>
    </div>
  );
}

export default App;
