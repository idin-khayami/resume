import React, { Component } from 'react';
import './App.css';
import {Header, Summary, Experience, Education, Skills} from './sections';
import styled from 'styled-components';
import LetterBackground from './images/letter-background.jpg';

const AppContainer = styled.div`
  background-image: url(${LetterBackground});
  background-repeat-y: repeat;
  width: 100vw;
  padding: 32px
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header/>
        <Summary/>
        <Experience/>
        <Education/>
        <Skills/>
      </AppContainer>
    );
  }
}

export default App;
