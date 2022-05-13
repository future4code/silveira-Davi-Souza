import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CreateComment from "../../components/CreateComment/CreateComment";
import Header from "../../components/Header/Header";
import VoteButtons from "../../components/VoteButtons/VoteButtons";
import VoteComments from "../../components/VoteComments/VoteComments";
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
        console.log(comment)
        return (
            <div key={comment.id}>
                <p>{comment.body}</p>
                <VoteComments userVote={comment.userVote} id={comment.id} voteSum={comment.voteSum} />
            </div>
        )
    })

    return (
        <div>
            <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
            <h1>Feed Page</h1>
            <button onClick={ () => goToPost(navigate)}>Muda Página</button>
            {post ? <></> : <p>Carregando...</p> }
            {post && <div>
                <div>
                    <p>Enviado por: {post.username}</p>
                    <p>{post.body}</p>
                    <p>{post.title}</p>
                </div>
                <div>
                    <VoteButtons userVote={post.userVote} id={post.id} voteSum={post.voteSum} />
                </div>
                <CreateComment id={post.id} />
            </div>}
            {commentsList === null ? <p>Não tem comentários</p> : <></>}
            {commentsList.length > 0 ? <>{commentsList}</> : <p>Carregando...</p>}
        </div>
    );
}

export default Feed;