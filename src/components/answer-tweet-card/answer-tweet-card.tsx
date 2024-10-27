import React from "react";
import { ProfileInfos, Text, TweetCardText, TweetContainer, UserName, UserNickName } from "./styles";
import { PictureProfile } from "../picture-profile/picture-profile";

interface AnswerTweetCardProps {
  text: string;
  picture: string;
  name: string;
  nickName: string
}

function AnswerTweetCard({
  text,
  picture,
  name,
  nickName
}: AnswerTweetCardProps) {

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
    </TweetCardText>
  </TweetContainer>;
}

export default AnswerTweetCard;