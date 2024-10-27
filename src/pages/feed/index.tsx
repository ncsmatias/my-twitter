import React from "react";
import { Content, Header, MainLayout, PictureProfile, PrimaryButton, Title, TweetText } from "../../components";

import sparkleIcon from '../../assets/sparkle.svg';
import { Tweet, TweetArea } from "./styles";

function FeedPage() {
  return <MainLayout>
    <Header>
      <Title>Feed</Title>
      <img src={sparkleIcon} />
    </Header>
    <Content>
      <Tweet>
        <TweetArea>
          <PictureProfile src="https://images.pexels.com/photos/3212954/pexels-photo-3212954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <TweetText placeholder="O que está acontecendo?" />
        </TweetArea>
        <PrimaryButton style={{ borderRadius: '32px' }}>Tweet</PrimaryButton>
      </Tweet>
    </Content>
  </MainLayout>;
}

export default FeedPage;