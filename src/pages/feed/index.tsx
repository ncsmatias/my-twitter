import React from "react";
import { Content, Header, MainLayout, PictureProfile, PrimaryButton, Title, TweetCard, TweetText } from "../../components";

import sparkleIcon from '../../assets/sparkle.svg';
import { Tweet, TweetArea } from "./styles";

const tweetData = [
  {
    id: "1",
    comments: "30",
    picture: "https://images.pexels.com/photos/774866/pexels-photo-774866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    nickName: "@clarinha",
    name: "Ana Clara",
  },
  {
    id: "2",
    comments: "10",
    picture: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Coding is like humor. When you have to explain it, it’s bad.",
    nickName: "@devguru",
    name: "Lucas Lima",
  },
  {
    id: "3",
    comments: "40",
    picture: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Life is about creating and living experiences that are worth sharing.",
    nickName: "@carolzinha",
    name: "Carolina Souza",
  },
  {
    id: "4",
    comments: "15",
    picture: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Strive not to be a success, but rather to be of value.",
    nickName: "@pedrito",
    name: "Pedro Oliveira",
  },
  {
    id: "5",
    comments: "50",
    picture: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    nickName: "@mariazinha",
    name: "Maria Fernanda",
  },
];

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

      {
        tweetData.map((tweet) =>
          <TweetCard
            id={tweet.id}
            comments={tweet.comments}
            picture={tweet.picture}
            text={tweet.text}
            nickName={tweet.nickName}
            name={tweet.name}
          />
        )
      }

    </Content>
  </MainLayout>;
}

export default FeedPage;