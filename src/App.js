import './App.css';
import Header from './components/Header/Header';
import NavbarL from './components/NavbarL/NavbarL';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContentConteiner from './components/Content/ContentContainer';
import ProfilesContainer from './components/Profiles/ProfilesContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import Projects from './components/Projects/Projects';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='wrapper'>
        <Header />
          <div className="_conteiner">
              <NavbarL />
              <Routes>
                <Route path='/Content' element={<ContentConteiner 
                  store = {props.store}
                  />} />


                <Route path='/profile' element={<ProfilesContainer />}/>
                <Route path="/profile/:userId" element={<ProfilesContainer/>}/>

                {/* <Route path="/profile/" element={<ProfilesContainer />}>
                  <Route path=":userId" element={<ProfilesContainer />} />
                </Route> */}

                <Route path='/Messages/*' element={<MessagesContainer 
                  store = {props.store} 
                  />} />
                  
                <Route path='/Projects' element={<Projects />} />
                <Route path='/Music' element={<Music />} />
                <Route path='/Users' element={<UsersContainer />} />
              </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
