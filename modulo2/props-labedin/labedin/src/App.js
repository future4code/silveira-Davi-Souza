import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import image_email from './imagens/email.png'
import image_endereco from './imagens/endereco-residencial.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Davi Souza" 
          descricao="Oi, eu sou o Davi. Estou iniciando na carreira de programador, gosto muito da área de técnologia e pretendo me aventurar 
          cada vez mais por esse universo tão incrível."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">

        <CardPequeno 
        imagem={image_email}
        text_name="E-mail:"
        text="teste@gmail.com"/>

        <CardPequeno 
        imagem={image_endereco} 
        text_name="Endereço:"
        text="Av. Brasil"/>

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Estudo" 
          descricao="Desenvolvedor Web-Fullstack" 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" 
          nome="Projetos" 
          descricao="Em início de carreira, aprendendo a desenvolver e logo colocando muitos projetos próprios no ar!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          link="https://www.facebook.com/"
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />      

        <ImagemButton
          link="https://www.twitter.com/"
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
