import React, { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import { createData } from "../../services/createContent";

const CreatePost = () => {
    const [form, onChange, cleanFields] = useForm({title: "", body: ""});
    const [ isLoading, setIsLoading ] = useState(false);

    const onSubmit = (event) => {

        event.preventDefault();

        createData( `${BASE_URL}/posts`, form, cleanFields, setIsLoading );
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <input 
                        name="title"
                        type="text"
                        value={form.title}
                        onChange={onChange}
                        placeholder={"Título"}
                        required
                    />
                    <input 
                        name="body"
                        type="text" 
                        value={form.body} 
                        onChange={onChange} 
                        placeholder={"Escreva seu post..."} 
                        required 
                    />
                </div>
                <button>Postar</button>
            </form>
            {isLoading ? <p>Carregando...</p> : <></>}
        </div>
    );
}

export default CreatePost;