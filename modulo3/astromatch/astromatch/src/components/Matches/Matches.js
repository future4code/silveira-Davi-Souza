import React, {useState, useEffect} from "react";
import { getMatches } from "../../services/requests";

const Matches = (props) => {
    const [matches, setMatches] = useState([]);

    useEffect( () => {
        getMatches(setMatches);
    }, [])

    console.log(matches)

    const list = matches.map( person => {
        return (
            <div>
                <p>Nome: {person.name}</p>
                <p>Idade: {person.age}</p>
            </div>
        )
    });

    return (
        <div>
            <div>{list}</div>
            <button onClick={() => props.switchPage("list")}>MUDA PAGINA</button>
        </div>
    )
}

export default Matches;