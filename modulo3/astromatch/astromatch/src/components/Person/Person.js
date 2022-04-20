import React, {useState, useEffect} from "react";
import { getProfileToChoose, choosePerson } from "../../services/requests";

const Person = (props) => {
    const [person, setPerson] = useState([]);
    const [match, setMatch] = useState(false);

    useEffect( () => {
        getProfileToChoose(setPerson)
    }, [match])

    return (
        <div>
            <p>Nome: {person.name}</p>
            <p>Idade: {person.age}</p>
            <p>Bio: {person.bio}</p>
            <img src={person.photo}></img>
            {console.log(person)}
            <button onClick={() => choosePerson(person.id, true, setMatch)} >like</button>
            <button onClick={() => choosePerson(person.id, false, setMatch)} >dislike</button>
            <button onClick={() => props.switchPage("match")}>MUDA PAGINA</button>
        </div>
    )
}

export default Person;