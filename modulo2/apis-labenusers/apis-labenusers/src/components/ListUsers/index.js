import React from "react";

class ListUsers extends React.Component {
    render() {
        const list = this.props.users.map(users => {
            return <li key={users.id}>
                {users.name}
            </li>;
        });

        return(
            <div>
                <ul>
                    {list}
                </ul>
                <hr/>
            </div>
        )
    }
}

export default ListUsers;