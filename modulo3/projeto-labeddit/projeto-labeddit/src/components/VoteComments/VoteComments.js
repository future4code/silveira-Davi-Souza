import React, { useEffect, useState } from "react";
import arrowUp from "../../img/arrow-up.png";
import arrowDown from "../../img/arrow-down.png";
import arrowUpActive from "../../img/arrow-up-active.png";
import arrowDownActive from "../../img/arrow-down-active.png";
import { StyledButton } from "./Styled";
import { voteComment } from "../../services/user";

const VoteComments = ({ userVote, id, voteSum}) => {

  const [ arrowButton, setArrowButton ] = useState({up: arrowUp, down: arrowDown});

  useEffect( () => {
    changeButton();
  }, [])

  const changeButton = () => {
    if(userVote !== null){
        if(userVote === 1) {
            setArrowButton({...arrowButton, up: arrowUpActive});
        }
        else {
            setArrowButton({...arrowButton, down: arrowDownActive});
        }
    }
    else {
        setArrowButton({up: arrowUp, down: arrowDown});
    }
}

const onClickButton = (vote) => {
  changeButton();
  voteComment(vote, userVote, id);
}

  return (
    <div>
      <div>
          <StyledButton onClick={() => onClickButton(1, userVote, id)}><img src={arrowButton.up} /></StyledButton>
          <p>{voteSum === null ? 0 : voteSum}</p>
          <StyledButton onClick={() => onClickButton(-1, userVote, id)}><img src={arrowButton.down} /></StyledButton>
      </div>
    </div>
  );
}

export default VoteComments;