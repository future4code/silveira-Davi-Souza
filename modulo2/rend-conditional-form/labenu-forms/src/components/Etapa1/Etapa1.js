import React from "react";
import './Etapa1.css'

class Etapa1 extends React.Component {
    render(){
        return (
            <div className={"etapa-1"}>
                <form>
                    <h1>ETAPA 1 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                    <ol>
                        <li>
                            <label for="nome">Qual o seu nome?</label>
                        </li>
                        <input type={"name"} id="nome"></input>
                        <li>
                            <label for="idade">Qual a sua idade?</label>
                        </li>
                        <input type={"number"} id="idade"></input>
                        <li>
                            <label for="email">Qual o seu e-mail?</label>
                        </li>
                        <input type={"email"} id="email"></input>
                        <li>
                            <label for="escolaridade">Qual a sua escolaridade?</label>
                        </li>
                        <select id="escolaridade">
                            <option value="MI">Ensino Médio Incompleto</option>
                            <option value="MC">Ensino Médio Completo</option>
                            <option value="SI">Ensino Superior Incompleto</option>
                            <option value="SC">Ensino Superior Completo</option>
                        </select>
                    </ol>
                </form>
            </div>
        )
    }
}

export default Etapa1;