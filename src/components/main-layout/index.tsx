import React, { ReactNode } from 'react'
import { Container, Content, Header, Link, Nav, SideNav } from './styles';

import { PrimaryButton } from '../button/primary-button';

import twitterIcon48 from '../../assets/twitter48.svg'
import homeIcon from '../../assets/menu/home.svg';
import exploreIcon from '../../assets/menu/explore.svg';
import notificationIcon from '../../assets/menu/notifications.svg';
import bookmarksIcon from '../../assets/menu/bookmarks.svg';
import messagesIcon from '../../assets/menu/messages.svg';
import moreIcon from '../../assets/menu/more.svg';
import listIcon from '../../assets/menu/list.svg';
import profileIcon from '../../assets/menu/profile.svg';

function MainLayout({ children }: { children: ReactNode }) {
  return <Container>
    <SideNav>
      <Header>
        <img src={twitterIcon48} />
      </Header>

      <Nav>
        <Link href='*' selected>
          <img src={homeIcon} />
          Home
        </Link>
        <Link href='*'>
          <img src={exploreIcon} />
          Explorar
        </Link>
        <Link href='*'>
          <img src={notificationIcon} />
          Notificações
        </Link>
        <Link href='*'>
          <img src={messagesIcon} />
          Mensagens
        </Link>
        <Link href='*'>
          <img src={bookmarksIcon} />
          Bookmarks
        </Link>
        <Link href='*'>
          <img src={listIcon} />
          Listas
        </Link>
        <Link href='*'>
          <img src={profileIcon} />
          Perfil
        </Link>
        <Link href='*'>
          <img src={moreIcon} />
          Mais
        </Link>
      </Nav>

      <PrimaryButton
        style={{
          width: '100%',
          padding: '16px',
          borderRadius: '32px'
        }}
      >
        Tweet
      </PrimaryButton>
    </SideNav>
    <Content>
      {children}
    </Content>
  </Container>;
}

export default MainLayout;