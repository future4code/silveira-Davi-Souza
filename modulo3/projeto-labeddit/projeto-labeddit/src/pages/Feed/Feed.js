import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { goToPost } from "../../routes/coodinator";

const Feed = ({ rightButtonText, setRightButtonText }) => {
    useProtectedPage();
    const navigate = useNavigate();
    const params = useParams();

    const post = useRequestData( {}, `${BASE_URL}/posts`)[params.index];
    console.log("post: ", post)

    const comments = useRequestData( [], `${BASE_URL}/posts/${params.id}/comments`);

    const commentsList = comments.map(comment => {
        return (
            <div key={comment.id}>
                <p>{comment.body}</p>
            </div>
        )
    })

    return (
        <div>
            <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
            <h1>Feed Page</h1>
            <button onClick={ () => goToPost(navigate)}>Muda Página</button>
            {post && <div>
                <div>
                    <p>Enviado por: {post.username}</p>
                    <p>{post.body}</p>
                    <p>{post.title}</p>
                </div>
                <div>
                    <button></button>
                </div>
            </div>}
            {commentsList}
        </div>
    );
}

export default Feed;