import './App.css';
import Header from './components/Header/Header';
import NavbarL from './components/NavbarL/NavbarL';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './components/Content/Content';
import Profiles from './components/Profiles/Profiles';
import Messages from './components/Messages/Messages';
import Companies from './components/Companies/Companies';
import Projects from './components/Projects/Projects';
import Music from './components/Music/Music';




const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='wrapper'>
        <Header />
          <div className="_conteiner">
              <NavbarL />
              <Routes>
                <Route path='/Content' element={<Content 
                  contentPost = {props.state.contentPage.posts}
                  addPost = {props.addPost}
                  />} />
                <Route path='/Profiles' element={<Profiles />} />
                <Route path='/Messages/*' element={<Messages 
                  dialogs = {props.state.messagesPage.dialogsData} 
                  messages = {props.state.messagesPage.messagesData} />}/>
                <Route path='/Companies' element={<Companies />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/Music' element={<Music />} />
              </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
