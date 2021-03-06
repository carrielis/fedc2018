import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Wrapper from './Layout/Wrapper';
import Header from './Layout/Header';
import Main from './Home/Main';
import MainButtons from './Home/MainButtons';
import Footer from './Home/Footer';
import FEDC from '../components/Fedc';
import Logo from '../components/Logo';
import YearIcon from '../components/YearIcon';
import Menu from './Layout/Menu';
import BlurFilter from './Layout/BlurFilter';

const LogoContainer = styled.div`
  position: absolute;
  top: 4.25rem;
  z-index: 10;
`;

const YearContainer = styled.div`
  position: absolute;
  top: 1.3rem;
  margin-left: 50px;
  z-index: 10;
`;

const FedcContainer = styled.div`
  position: absolute;
  top: 17rem;
  margin-left: -50px;
  z-index: 10;
`;

class Index extends PureComponent {
  state = {
    menu: {
      visible: false,
      items: [
        { name: 'HOME', href: '/', active: true },
        { name: 'AGENDA', href: '/agenda', active: false },
        { name: 'SPEAKERS', href: '/speakers', active: false },
      ],
    },
  }

  toggleMenu = () => {
    const { menu } = this.state;
    this.setState({
      menu: {
        ...menu,
        visible: !menu.visible,
      },
    });
  }

  render() {
    const { toggleMenu } = this;
    const { menu } = this.state;

    return (
      <Wrapper>
        <Header toggleMenu={toggleMenu} menuVisible={menu.visible} />
        <BlurFilter active={menu.visible}>
          <Main>
            <LogoContainer>
              <Logo />
            </LogoContainer>
            <YearContainer>
              <YearIcon />
            </YearContainer>
            <FedcContainer>
              <FEDC />
            </FedcContainer>
          </Main>
          <MainButtons />
          <Footer />
        </BlurFilter>
        <Menu {...menu} />
      </Wrapper>
    );
  }
}

export default Index;
