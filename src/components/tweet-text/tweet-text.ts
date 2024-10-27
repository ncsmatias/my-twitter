import styled from "styled-components";

export const TweetText = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;

  font-size: 20px;

  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #5B7083;
    font-size: 20px;
    font-weight: 600;
  }
`