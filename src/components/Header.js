import styled from 'styled-components';
import Container from './Container';
import Menu from './Menu';

const StyledHeader = styled.header`
  padding-top: 2.375rem;
  padding-bottom: 2.375rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(196, 196, 196, 0.1);
  z-index: 700;
`;

const HeaderContainer = styled(Container)`
  @media (min-width: 62em) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    display: flex;
    align-items: center;
    @media (max-width: 61.9375em) {
      display: none;
    }
  }

  li {
    &:not(:last-child) {
      @media (min-width: 62em) {
        margin-right: 3.0625rem;
      }
    }

    &:last-child {
      a {
        color: var(--white);
        background: var(--pink);
        padding: 0.75rem 1.125rem;
        border-radius: 0.625rem;
      }
    }
  }

  a {
    display: block;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.375rem;
    transition: all 0.3s;

    &:hover {
      color: var(--white);
    }
  }
`;

const HeaderMenu = styled(Menu)`
  margin-right: 2.625rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderMenu />
        <ul>
          <li>
            <a href="/">Gabriela Tizo</a>
          </li>
          <li>
            <a href="/">Quem Somos</a>
          </li>
          <li>
            <a href="/">Quero uma viagem personalizada</a>
          </li>
        </ul>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
