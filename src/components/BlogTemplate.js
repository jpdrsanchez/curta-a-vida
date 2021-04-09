import styled from 'styled-components';

import Container from './Container';

const Main = styled.main`
  padding-top: calc(122px + 4.375rem);
  padding-bottom: 3.75rem;

  h1 {
    text-align: center;
    font-family: var(--main-title);
    color: var(--pink);
    font-size: 3.5rem;
    margin-bottom: 4.375rem;
  }
`;

const MainContainer = styled(Container)`
  display: grid;
  gap: 1.875rem;

  @media (min-width: 48em) {
    grid-template-columns: auto 1fr;
  }
`;

const BlogTemplate = ({ children }) => {
  return (
    <Main>
      <Container>
        <h1>Blog</h1>
      </Container>
      <MainContainer>{children}</MainContainer>
    </Main>
  );
};

export default BlogTemplate;
