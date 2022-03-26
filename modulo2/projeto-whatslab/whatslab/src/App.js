import React from 'react'
import styled from 'styled-components'
import Msg from './componentes/Msg/Msg.js'
import icone_send from './componentes/img/send-message.png'

const Div_master = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  background-color: #128c7e;
`

const Box_div = styled.div `
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 35vw;
  height: 99vh;
  border: 1px solid black;
  background-color: antiquewhite;
`
const Box_input = styled.div `
  display: grid;
  grid-template-columns: 15% 65% 15%;
  grid-template-rows: 50%;
  align-content: center;
  width: 100%;
  height: 8%;
  justify-content: space-evenly;
  background-color: #edecea;
`
const Button_enviar = styled.button `
  display: flex;
  box-sizing: border-box;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  border: none;
  background-color: #128c7e;
  align-self: center;
  justify-self: center;
  justify-content: center;
  padding-left: 0.5em;
  &:hover {
    background-color: #0e7b6e;
  }
  &:active {
    background-color: #0b6d62;
  }
`

const Imagem = styled.img `
  display: flex;
  align-self: center;
  width: 1em;
  height: 1em;
`

const Input_text = styled.input `
  border: none;
  border-radius: 0.6em;
  font-size: 0.6em;
  padding-left: 0.6em;
  height: 2.3em;
  &:focus {
    outline: 0;
  }
`

class App extends React.Component {
  
  state = {
    campo_mensagem: [],

    valorInputUsuario: '', 
    valorInputMensagem: ''
  }

  addMsg = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    };

    this.setState({ campo_mensagem: [...this.state.campo_mensagem, novaMensagem] });

    this.state.valorInputUsuario = '';
    this.state.valorInputMensagem = '';
  }

  onChangeInputUsuario = (event) => this.setState({valorInputUsuario: event.target.value});
  onChangeInputMensagem = (event) => this.setState({valorInputMensagem: event.target.value});

  render () {

    const listaMensagem = this.state.campo_mensagem.map((obj) => {
      return (
          <Msg usuario={obj.usuario} texto = {obj.mensagem} />
      )
    });

    return (
      <Div_master>

        <Box_div>

          {listaMensagem}

          <Box_input>

            <Input_text
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            type="text" 
            placeholder='usuário' 
            />

            <Input_text
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem} 
            type="text" 
            placeholder='mensagem'
            required
            />

            <Button_enviar onClick={this.addMsg}><Imagem src = {icone_send} alt = 'Icone Enviar' /></Button_enviar>

          </Box_input>

        </Box_div>

      </Div_master>
  );
  }
}

export default App;
