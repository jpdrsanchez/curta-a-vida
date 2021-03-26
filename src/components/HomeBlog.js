import styled from 'styled-components';
import BlogCard from './BlogCard';
import Container from './Container';

const Wrapper = styled.section`
  padding-top: 1.875rem;
  padding-bottom: 3.75rem;

  h1 {
    text-align: center;
    font-family: var(--main-title);
    color: var(--pink);
    font-size: 3.5rem;
    margin-bottom: 2.875rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2.875rem;

    li {
      &:not(:last-child) {
        margin-right: 1.25rem;
      }
    }

    a {
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 2rem;
      transition: all 0.3s;

      &:hover {
        color: var(--pink);
      }
    }
  }
`;

const PostsWrapper = styled.div`
  display: grid;
  gap: 2.5rem 1.875rem;

  @media (min-width: 36em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 62em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const HomeBlog = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Inspire-se!</h1>
        <ul>
          <li>
            <a href="/">Categoria 1</a>
          </li>
          <li>
            <a href="/">Categoria 1</a>
          </li>
          <li>
            <a href="/">Categoria 1</a>
          </li>
          <li>
            <a href="/">Categoria 1</a>
          </li>
          <li>
            <a href="/">Categoria 1</a>
          </li>
          <li>
            <a href="/">Categoria 1</a>
          </li>
          <li>
            <a href="/">Categoria 1</a>
          </li>
          <li>
            <a href="/">Categoria 1</a>
          </li>
          <li>
            <a href="/">Categoria 1</a>
          </li>
          <li>
            <a href="/">Categoria 1</a>
          </li>
        </ul>
        <PostsWrapper>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </PostsWrapper>
      </Container>
    </Wrapper>
  );
};

export default HomeBlog;
