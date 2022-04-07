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
    currentScreen: "list",
    playlistUrl: ""
  }

  goToDetail = (url) => {
    this.setState({currentScreen: "details", playlistUrl: url});
  }

  selectPage = () => {
    switch (this.state.currentScreen) {
      case "list":
        return <List headers={headers}/>
      
      case "details":
        return <Details/>

      case "playlist":
        return <Playlist headers={headers}/>  
      
      default:
        return <List headers={headers}/>
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
