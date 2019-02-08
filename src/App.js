import React, { Component } from 'react';
import './App.css';
import { GiphyForm } from './GiphyForm';
import styled from 'styled-components';

const Wrapper = styled.div`
background: black;

`;

class App extends Component {
  render() {
    return (
      <Wrapper className="App">
      <div className='mainDiv'>
      <GiphyForm />
      </div>
      </Wrapper>
    );
  }
}

export default App;
