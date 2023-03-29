import './App.css';
import Header from './components/Header/Header';
import NavbarL from './components/NavbarL/NavbarL';
import Content from './components/Content/Content';
import NavbarR from './components/NavbarR/NavbarR';


const App = () => {
  return (
    <div className="App">
      <div className='wrapper'>
      <Header />

        <div className="_conteiner">
          <NavbarL />
          <Content />
          <NavbarR />

        </div>
      </div>
    </div>
  );
}

export default App;
