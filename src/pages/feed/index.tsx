import React from "react";
import { Header, MainLayout, Title } from "../../components";

import sparkleIcon from '../../assets/sparkle.svg';

function FeedPage() {
  return <MainLayout>
    <Header>
      <Title>Feed</Title>
      <img src={sparkleIcon} />
    </Header>
    <h1>Feed Page</h1>
  </MainLayout>;
}

export default FeedPage;