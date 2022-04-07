import React from "react";
import Details from "./components/Details/Details";
import List from "./components/List/List";
import Playlist from "./components/Playlist/Playlist";

const headers = {
  headers: {
    Authorization: "Davi-Souza-Silveira"
  }
}

class App extends React.Component {
  state = {
    currentScreen: "",
    playlistId: ""
  }

  goToDetails = (id) => {
    this.setState({currentScreen: "details", playlistId: id});
  }

  goToPlaylist = () => {
    this.setState({currentScreen: "playlist", playlistId: ""});
  }

  goToList = () => {
    this.setState({currentScreen: "list", playlistId: ""});
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
                  goToPlaylist={this.goToPlaylist}
                  goToList={this.goToList}
                  id={this.state.playlistId}
                />

      case "playlist":
        return  <Playlist 
                  goToList={this.goToList}
                  headers={headers}
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
      <div>
        {this.selectPage()}
      </div>
    );
  }  
}

export default App;
