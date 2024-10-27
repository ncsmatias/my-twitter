import React from "react";
import { Footer, ProfileInfos, Text, TweetCardText, TweetContainer, UserName, UserNickName } from "./styled";
import { PictureProfile } from "../picture-profile/picture-profile";
import { IconButton } from "../button/icon-button";

import chatCircleIcon from "../../assets/chat-circle.svg";
import { useNavigate } from "react-router-dom";

interface TweetCardProps {
  id: string;
  text: string;
  picture: string;
  comments: string;
  name: string;
  nickName: string
}

function TweetCard({
  id,
  text,
  picture,
  comments,
  name,
  nickName
}: TweetCardProps) {
  const navigate = useNavigate();

  const handleGoToCommentPage = () => {
    navigate(`comments/${id}`)
  }

  return <TweetContainer>
    <PictureProfile
      src={picture}
    />
    <TweetCardText>
      <ProfileInfos>
        <UserName>{name}</UserName>
        <UserNickName>{nickName}</UserNickName>
      </ProfileInfos>
      <Text>
        {text}
      </Text>
      <Footer>
        <IconButton onClick={handleGoToCommentPage}>
          <img src={chatCircleIcon} />
          {comments}
        </IconButton>
      </Footer>
    </TweetCardText>
  </TweetContainer>;
}

export default TweetCard;