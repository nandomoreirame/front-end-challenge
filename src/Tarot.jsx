import React, { Component } from 'react';

import Header from './components/Header';
import StartButton from './components/StartButton';
import CardLits from './components/CardLits';

import './sass/container.sass';

class TarotGame extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <StartButton />
        <main>
          <CardLits />
        </main>
      </div>
    );
  }
}

export default TarotGame;
