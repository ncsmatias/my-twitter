import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
`

const SideNav = styled.section`
  width: 100%;
  height: 100vh;

  border-right: 1px solid #EBEEF0;

  padding: 24px;
`

const Content = styled.section`
  width: 100%;
  height: 100vh;

  overflow-y: scroll;
`
const Header = styled.header`
  width: 100%;
`

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 32px 0;
`

const Link = styled.a<{ selected?: boolean }>`
  font-size: 20px;
  font-weight: bold;
  padding: 2px 12px;

  color: ${(props) => props.selected ? '#1DA1F2' : '#0F1419'} ;

  text-decoration: none;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 20px;
`

export {
  Container,
  SideNav,
  Content,
  Header,
  Nav,
  Link
}