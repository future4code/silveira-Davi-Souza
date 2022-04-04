import React from "react";
import './Etapa3.css'

class Etapa3 extends React.Component {
    render(){
        return (
            <div className={"etapa-3"}>
                <form>
                    <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                    <ol>
                        <li>
                            <label for="text">Por que você não terminou um curso de graduação?</label>
                        </li>
                        <input id="text"></input>
                        <li>
                            <label for="curso">Você fez algum curso complementar?</label>
                        </li>
                        <select id="curso">
                            <option value="NUM">Nenhum</option>
                            <option value="CT">Ensino Médio Completo</option>
                            <option value="CI">Curso de Inglês</option>
                        </select>
                    </ol>
                </form>
            </div>
        )
    }
}

export default Etapa3;