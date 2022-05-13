import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { goToFeed, goToRegister } from "../../routes/coodinator";
import VoteButtons from "../../components/VoteButtons/VoteButtons";
import CreatePost from "../../components/CreatePost/CreatePost";

const Post = ({ rightButtonText, setRightButtonText }) => {
    useProtectedPage();
    const navigate = useNavigate();

    const posts = useRequestData([],`${BASE_URL}/posts`);

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
                    <VoteButtons userVote={post.userVote} id={post.id} voteSum={post.voteSum} />
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
            <CreatePost/>
            {postsList.length > 0 ? <>{postsList}</> : <p>Carregando...</p>}
        </div>
    );
}

export default Post;