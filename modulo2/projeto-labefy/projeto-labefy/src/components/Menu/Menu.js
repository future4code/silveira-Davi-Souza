import React from "react";
import { MainMenu } from "./styled.js"
import Home from "../../img/home.png"
import Biblioteca from "../../img/biblioteca.png"
import Add from "../../img/add.png"
import Logo from "../../img/logo-original.png"
import List from "../List/List.js";

class Menu extends React.Component {
    render() {
        return (
            <MainMenu>
                <div className="div-logo"><img src={Logo} className="img-logo"/> Labefy </div>
                <div className="div-options">
                    <ul>
                        <li>
                            <button onClick={() => this.props.goToPlaylist()}><img src={Home}/>Início</button>
                        </li>
                        <li>
                            <button onClick={() => this.props.goToList()}><img src={Biblioteca}/>Sua Biblioteca</button>
                        </li>
                        <li>
                            <button onClick={() => this.props.goToPlaylist()} ><img src={Add}/>Criar Playlist</button>
                        </li>
                    </ul>
                </div>
                <hr/>
                <div className="div-options">
                    <ul>
                        <li>
                            <List
                                headers={this.props.headers}
                                goToPlaylist={this.goToPlaylist}
                                goToDetails={this.goToDetails}
                            />
                        </li>
                    </ul>
                    
                </div>
                
            </MainMenu>
        )
    }
}

export default Menu;