import React, { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import { createData } from "../../services/createContent";

const CreateComment = ({id}) => {

    const [form, onChange, cleanFields] = useForm({ body: "" });
    const [ isLoading, setIsLoading ] = useState(false);

    const onSubmit = (event) => {

        event.preventDefault();

        createData( `${BASE_URL}/posts/${id}/comments`, form, cleanFields, setIsLoading);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
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

export default CreateComment;