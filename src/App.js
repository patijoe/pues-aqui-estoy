import React from 'react';
import Header from './components/Header';
import Conoceme from './components/Conoceme';
import Aptitudes from './components/Aptitudes';
import Queseyo from './components/Queseyo';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />

        <main className="main">
          
          <Conoceme />
          <Aptitudes />
          <Queseyo />
        </main>
      </div>
    );
  }
}

export default App;
