import styled from "styled-components";

const Tweet = styled.section`
  width: 100%;

  padding: 24px;
  border-bottom: 1px solid #EBEEF0;

  display: flex;
  flex-direction: column;
  align-items: end;
`

const TweetArea = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 8px;
`

export {
  Tweet,
  TweetArea
}