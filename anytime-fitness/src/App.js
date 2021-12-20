import logo from './logo.svg';
import './App.css';
import Header from './components/homepage/Header';
import Featured from './components/homepage/Featured';
import About from './components/homepage/About';
import Footer from './components/homepage/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <About />
      <Footer />
    </div>
  );
}

export default App;
