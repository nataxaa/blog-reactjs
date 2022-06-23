import React from 'react';
import logo from './logo.svg';
import './style/global.ts';
import {Articles} from '../src/components/Articles'
import { AddArticles } from './components/AddArticles';
import { Container, GlobalStyle } from './style/global';

function App() {
  return (
    <div className="App">
      <Container>
      <Articles/>
      <AddArticles/>
      </Container>
      <GlobalStyle/>
    </div>
  );
}

export default App;
