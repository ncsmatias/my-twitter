import styled from "styled-components";

const TweetContainer = styled.section`
  width: 100%;
  min-height: 152px;
  display: flex;
  
  gap: 24px;

  padding: 24px;
  border-bottom: 1px solid #EBEEF0;
`

const TweetCardText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;
`

const Text = styled.span`

`

const Footer = styled.div`
  display: flex;
  gap: 24px;
`

const ProfileInfos = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;
`

const UserName = styled.span`
  color: #0F1419;
  font-weight: bold;

  font-size: 16px;
`

const UserNickName = styled.span`
  color: #89A2B8;
  font-size: 14px;
`


export {
  TweetContainer,
  Text,
  TweetCardText,
  Footer,
  ProfileInfos,
  UserName,
  UserNickName
}