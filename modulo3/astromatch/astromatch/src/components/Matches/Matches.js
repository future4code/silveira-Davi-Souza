import React, {useState, useEffect} from "react";
import { getMatches, clear } from "../../services/requests";
import home from "../../img/home.png";
import { MainDiv } from "./Styled";

const Matches = (props) => {
    const [matches, setMatches] = useState([]);

    useEffect( () => {
        getMatches(setMatches);
    }, [])

    const handleClear = () => {
        clear();
        getMatches(setMatches);
    }

    const list = matches.map( person => {
        return (
            <div>
                <div className="card" key={person.id}>
                    <img className="imagem-match" src={person.photo} />
                    <p> {person.name}, {person.age}</p>
                </div>
                <hr/>
            </div>
            
        )
    });

    return (
        <MainDiv>
            <div className="div1">
                <div className="div-border">
                    <div className="div-control">
                        <div className="div-header">
                            <button className="button" onClick={() => props.switchPage("list")}><img className="button-img" src={home}/></button>
                        </div>
                        <hr/>
                        <div className="div-imagem-controle">
                            <div>{list}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div2">
                <button onClick={handleClear}>clear</button>
            </div>
        </MainDiv>
    )
}

export default Matches;