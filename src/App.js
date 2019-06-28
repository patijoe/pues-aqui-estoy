import React from 'react';
import diachungo from './images/diachungo.jpeg';
import patri from './images/patri_bw_small.jpg';
import Header from './components/Header';
import Conoceme from './components/Conoceme';
import Aptitudes from './components/Aptitudes';
import Queseyo from './components/Queseyo';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      imagen: (patri)
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const newImg = this.state.imagen === (patri) ? (diachungo) : (patri);

    this.setState({
      imagen: newImg
    })

    console.log('^^', this.state.imagen);
  }

  render() {
  const {imagen} =this.state;

    return (
      <div className="app">
        <Header />

        <main className="main">
          
          <Conoceme 
            imagen={imagen}
            handleChange={this.handleChange} 
          />
          <Aptitudes />
          <Queseyo />
        </main>
      </div>
    );
  }
}

export default App;
