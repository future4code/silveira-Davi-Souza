import React from "react";

class PostUsers extends React.Component {

    render() {

        return(
            <div>
                <input type="text" value={this.props.inputName} onChange={this.props.onChangeName} placeholder="Nome"/>

                <input type="email" value={this.props.inputEmail} onChange={this.props.onChangeEmail} placeholder="E-mail"/>

                <button onClick={this.props.createUser}>Criar Usuário</button>
            </div>
        )
    }
}

export default PostUsers;