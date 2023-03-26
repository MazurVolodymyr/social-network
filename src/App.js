import './App.css';
import Headerr from './components/Header/Header';
import NavbarL from './components/NavbarL/NavbarL';
import Content from './components/Content/Content';
import NavbarR from './components/NavbarR/NavbarR';

const App = () => {
  return (
    <div className="App">
      <div className='wrapper'>
      <Headerr />

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
