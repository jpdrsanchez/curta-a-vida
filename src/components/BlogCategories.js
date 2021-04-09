import styled from 'styled-components';

const List = styled.ul`
  margin-top: 2.5rem;
  margin-left: 0.5rem;

  @media (max-width: 47.9375em) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.9375rem 1.875rem;
    flex-wrap: wrap;
  }

  li {
    &:not(:last-child) {
      @media (min-width: 48em) {
        margin-bottom: 0.9375rem;
      }
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
`;

const BlogCategories = () => {
  return (
    <List>
      <li>
        <a href="#">Categoria 1</a>
      </li>
      <li>
        <a href="#">Categoria 1</a>
      </li>
      <li>
        <a href="#">Categoria 1</a>
      </li>
      <li>
        <a href="#">Categoria 1</a>
      </li>
      <li>
        <a href="#">Categoria 1</a>
      </li>
    </List>
  );
};

export default BlogCategories;
