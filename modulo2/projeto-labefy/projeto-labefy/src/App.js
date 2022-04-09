import React from "react";
import Details from "./components/Details/Details";
import List from "./components/List/List";
import Menu from "./components/Menu/Menu";
import Playlist from "./components/Playlist/Playlist";
import Video from "./components/Video/Video";
import { MainPage } from "./styled";


const headers = {
  headers: {
    Authorization: "Davi-Souza-Silveira"
  }
}

class App extends React.Component {
  state = {
    currentScreen: "",
    playlistId: "",
    url: ""
  }

  goToDetails = (id) => {
    this.setState({currentScreen: "details", playlistId: id, url: ""});
  }

  goToPlaylist = () => {
    this.setState({currentScreen: "playlist", playlistId: "", url: ""});
  }

  goToList = () => {
    this.setState({currentScreen: "list", playlistId: "", url: ""});
  }

  goToVideo = (url) => {
    this.setState({currentScreen: "video", playlistId: "", url: url })
  }

  selectPage = () => {
    switch (this.state.currentScreen) {
      case "list":
        return  <List 
                  headers={headers}
                  goToPlaylist={this.goToPlaylist}
                  goToDetails={this.goToDetails}
                />
      
      case "details":
        return  <Details 
                  headers={headers}
                  goToPlaylist={this.goToPlaylist}
                  goToList={this.goToList}
                  goToVideo={this.goToVideo}
                  id={this.state.playlistId}
                />

      case "playlist":
        return  <Playlist 
                  goToList={this.goToList}
                  headers={headers}
                />  
      
      case "video":
        return  <Video
                  url={this.state.url}
                />

      default:
        return  <Playlist 
                  goToList={this.goToList}
                  headers={headers}
                /> 
    }
  }

  render () {
    return (
      <MainPage>
        <Menu
          goToList={this.goToList}
          goToPlaylist={this.goToPlaylist}
          headers={headers}
        />
        {this.selectPage()}
      </MainPage>
    );
  }  
}

export default App;
