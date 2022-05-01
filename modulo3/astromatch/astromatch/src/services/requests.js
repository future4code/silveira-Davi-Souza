import axios from "axios";
import { url } from "../contants/url";

export const getProfileToChoose = (saveData) => {
    axios.get(`${url}person`)
    .then(res => {
        saveData(res.data.profile);
    })
    .catch(error => {
        alert(error.response.data)
    })
}

export const getMatches = (saveData) => {
    axios.get(`${url}matches`)
    .then(res => {
        saveData(res.data.matches);
    })
    .catch(error => {
        alert(error.response)
    })
}

export const choosePerson = (id, choice) => {
    const body = {
        "id": id,
        "choice": choice
    }

    axios.post(`${url}choose-person`, body)
    .then(res => {
    })
    .catch(error => {
        alert(error.response)
    })
}

export const clear = () => {
    axios.put(`${url}clear`)
    .then(res => {
        console.log(res.data)
    })
    .catch(error => {
        alert(error.response)
    })
}