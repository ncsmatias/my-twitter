import React from "react";
import { Footer, ProfileInfos, Text, TweetCardText, TweetContainer, UserName, UserNickName } from "./styled";
import { PictureProfile } from "../picture-profile/picture-profile";
import { IconButton } from "../button/icon-button";

import chatCircleIcon from "../../assets/chat-circle.svg";

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
        <IconButton>
          <img src={chatCircleIcon} />
          {comments}
        </IconButton>
      </Footer>
    </TweetCardText>
  </TweetContainer>;
}

export default TweetCard;