import axios from "axios";
import { url } from "../contants/url";

export const getProfileToChoose = (saveData) => {
    axios.get(`${url}person`)
    .then(res => {
        saveData(res.data.profile);
        console.log(res.data.profile)
    })
    .catch(error => {
        alert(error.response.data)
    })
}

export const getMatches = (saveData) => {
    axios.get(`${url}matches`)
    .then(res => {
        console.log(res.data.matches)
        saveData(res.data.matches);
    })
    .catch(error => {
        alert(error.response)
    })
}

export const choosePerson = (id, choice, isMatch) => {
    const body = {
        "id": id,
        "choice": choice
    }

    axios.post(`${url}choose-person`, body)
    .then(res => {
        isMatch(res.data.isMatch);
        if(res.data.isMatch){
            alert("É MATCH PORRAAAAAAAAAAAAA")
        }
        else{
            alert("Não foi dessa vez campeao")
        }
    })
    .catch(error => {
        alert(error.response)
    })
}

export const clear = () => {
    axios.put(`${url}clear`)
    .then(res => {
        alert(res.data)
    })
    .catch(error => {
        alert(error.response)
    })
}