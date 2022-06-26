import React from 'react';
import './style/global.ts';
import {Articles} from '../src/components/Articles'
import { AddArticles } from './components/AddArticles';
import { Container, GlobalStyle } from './style/global';
import { Header } from './components/Header';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Register } from './components/Auth/Register';
import { Login } from './components/Auth/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './service/firebase';
import { ViewArticle } from './components/ViewArticle';



function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      
        <Router>
                <Header/>
                {user && (
                  
                    <Link className="bb" to="/AddArticles">Adicionar Postagem</Link>
                  
                )}
                <GlobalStyle/>
              <Routes>
                <Route path='/Register' element={<Register/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/AddArticles' element={<AddArticles/>}/>
                <Route path='/ViewArticle/:id' element={<ViewArticle/>}/>
                
                <Route path="/" element={
                  <div>
                    <Container>
                     <Articles/>
                     </Container>
                  </div>
                }/>
              </Routes>
        </Router>
      
    </div>
  );
}

export default App;
