import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { goToFeed, goToRegister } from "../../routes/coodinator";
import { votePost } from "../../services/user";

const Post = ({ rightButtonText, setRightButtonText }) => {
    useProtectedPage();
    const navigate = useNavigate();
    const posts = useRequestData([],`${BASE_URL}/posts`);
    console.log(posts);

    const onClickPost = (id, index) => {
        goToFeed(navigate, id, index)
    }

    const postsList = posts.map( (post, index) => {
        return (
            <div key={post.id}>
                <div>
                    <p>Enviado por: {post.username}</p>
                    <p>{post.body}</p>
                    <p>{post.title}</p>
                </div>
                <div>
                    <div>
                        <button onClick={() => votePost(1, post.userVote, post.id)}>UP</button>
                        <p>{post.voteSum}</p>
                        <button onClick={() => votePost(-1, post.userVote, post.id)}>DOWN</button>
                    </div>
                    <button onClick={() => onClickPost(post.id, index)}>Comments</button>
                </div>
            </div>
        )
    });

    return (
        <div>
            <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
            <h1>Post Page</h1>
            <button onClick={ () => goToRegister(navigate)}>Muda Página</button>
            {postsList}
        </div>
    );
}

export default Post;