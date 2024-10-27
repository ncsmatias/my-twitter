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

const replies = [
  {
    tweetId: "1",
    replies: [
      {
        id: "r1",
        text: "Great insight, Ana! Thanks for sharing!",
        nickName: "@joaopaulo",
        name: "João Paulo",
        picture: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: "r2",
        text: "This text has been around for ages! Love it.",
        nickName: "@julia",
        name: "Julia Mendes",
        picture: "https://images.pexels.com/photos/1234568/pexels-photo-1234568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    tweetId: "2",
    replies: [
      {
        id: "r3",
        text: "Haha! So true! 😂",
        nickName: "@marcelo",
        name: "Marcelo Ribeiro",
        picture: "https://images.pexels.com/photos/1234569/pexels-photo-1234569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    tweetId: "3",
    replies: [
      {
        id: "r4",
        text: "Couldn’t agree more! We should cherish our experiences.",
        nickName: "@aline",
        name: "Aline Costa",
        picture: "https://images.pexels.com/photos/1234570/pexels-photo-1234570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    tweetId: "4",
    replies: [
      {
        id: "r5",
        text: "Value over success is a great philosophy!",
        nickName: "@tiago",
        name: "Tiago Santos",
        picture: "https://images.pexels.com/photos/1234571/pexels-photo-1234571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    tweetId: "5",
    replies: [
      {
        id: "r6",
        text: "Very inspiring! Let's not doubt ourselves.",
        nickName: "@fernandinha",
        name: "Fernanda Lima",
        picture: "https://images.pexels.com/photos/1234572/pexels-photo-1234572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: "r7",
        text: "I believe in this! 💪",
        nickName: "@carlos",
        name: "Carlos Silva",
        picture: "https://images.pexels.com/photos/1234573/pexels-photo-1234573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
];

const getAllTweets = () => {
  return tweetData
}

const getTweetsByID = (tweetId: string) => {
  return tweetData.filter((tweet) => tweet.id === tweetId)[0]
}

const getRepliesForTweet = (tweetId: string) => {
  const tweetReplies = replies.find(reply => reply.tweetId === tweetId);
  return tweetReplies ? tweetReplies.replies : [];
};

export {
  getAllTweets,
  getTweetsByID,
  getRepliesForTweet
}