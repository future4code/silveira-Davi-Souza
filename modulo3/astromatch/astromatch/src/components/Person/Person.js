import React, {useState, useEffect} from "react";
import { getProfileToChoose, choosePerson, clear } from "../../services/requests";
import { MainDiv } from "./Styled";
import like from "../../img/like.png"
import dislike from "../../img/dislike.png"
import matchPage from "../../img/match.png";

const Person = (props) => {
    const [person, setPerson] = useState({});

    useEffect( () => {
        console.log(person.type)
        if(!person){
            clear();
        }
        getProfileToChoose(setPerson);
    }, [])

    const onClickLike = () => {
        choosePerson(person.id, true);
        getProfileToChoose(setPerson);
        if(!person){
            clear();
        }
    }

    const onClickDislike = () => {
        choosePerson(person.id, false);
        getProfileToChoose(setPerson);
        if(!person){
            clear();
        }
    }

    return (
        <MainDiv>
            <div className="div1">
                <div className="div-border">
                    <div className="div-control">
                        <div className="div-header">
                            <button className="button" onClick={() => props.switchPage("match")}><img className="button-img" src={matchPage}/></button>
                        </div>
                        <hr/>
                        <div className="div-imagem-controle">
                            <div className="div-imagem">        
                                <img className="imagem" src={person.photo}></img>
                            </div>
                        </div>
                        <hr/>
                        <div className="div-descricao">
                            <p><b>{person.name}</b>, {person.age}</p>
                            <p className="text">{person.bio}</p>
                        </div>
                        <hr/>
                        <div className="div-menu">
                            <button className="button" onClick={onClickDislike} ><img className="button-img" src={dislike}/></button>
                            <button className="button" onClick={onClickLike} ><img className="button-img" src={like}/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div2">
                <button onClick={clear}>Clear</button>
            </div>
        </MainDiv>
    )
}

export default Person;