import { useParams } from "react-router-dom";
import { AnswerTweetCard, Content, Header, MainLayout, PictureProfile, PrimaryButton, Title, TweetCard, TweetText } from "../../components";
import { useEffect, useState } from "react";
import { getRepliesForTweet, getTweetsByID } from "../../service/mocks";
import { Tweet, TweetArea } from "./styles";

function CommentsPage() {
  const { tweetSlug } = useParams();
  const [tweet, setTweet] = useState<any>(null)
  const [replies, setReplies] = useState<any>([])

  useEffect(() => {
    setTweet(getTweetsByID(tweetSlug!))
    setReplies(getRepliesForTweet(tweetSlug!))
  }, [])


  return <MainLayout>
    <Header>
      <Title>Tweet</Title>
    </Header>
    <Content>
      {tweet && <TweetCard
        id={tweet.id}
        comments={tweet.comments}
        picture={tweet.picture}
        text={tweet.text}
        nickName={tweet.nickName}
        name={tweet.name}
      />
      }
      <Tweet>
        <TweetArea>
          <PictureProfile src="https://images.pexels.com/photos/3212954/pexels-photo-3212954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <TweetText placeholder="Responder" />
        </TweetArea>
        <PrimaryButton style={{ borderRadius: '32px' }}>Responder</PrimaryButton>
      </Tweet>
      {
        replies.map((reply: any) =>
          <AnswerTweetCard
            name={reply.name}
            nickName={reply.nickName}
            picture={reply.picture}
            text={reply.text}
          />)
      }
    </Content>
  </MainLayout>;
}

export default CommentsPage;