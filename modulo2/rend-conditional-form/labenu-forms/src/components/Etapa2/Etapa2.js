import React from "react";
import './Etapa2.css'

class Etapa2 extends React.Component {
    render(){
        return (
            <div className={"etapa-2"}>
                <form>
                    <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                    <ol>
                        <li>
                            <label for="curso">Qual Curso?</label>
                        </li>
                        <input type={"text"} id="curso"></input>
                        <li>
                            <label for="unidade">Qual a unidade de ensino?</label>
                        </li>
                        <input type={"text"} id="unidade"></input>
                    </ol>
                </form>
            </div>
        )
    }
}

export default Etapa2;