import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1/Etapa1';
import Etapa2 from './components/Etapa2/Etapa2';
import Etapa3 from './components/Etapa3/Etapa3';
import Final from './components/Final/Final';

class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <>
                <Etapa1/>
                <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
              </>
      case 2:
        return <>
                <Etapa2/>
                <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
              </>
      case 3:
        return <>
                <Etapa3/>
                <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
              </>
      case 4:
        return <>
                <Final/>
              </>
    }
  }

  irParaProximaEtapa = () => this.setState({etapa: this.state.etapa + 1});

  render() {
    return (
      <div className={"div-pai"}>
        {this.renderizaEtapa()}
      </div>
    );
  }
}

export default App;