import styled from 'styled-components';

const Article = styled.article`
  position: relative;

  @media (max-width: 35.9375em) {
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  div {
    background: var(--white);
    box-shadow: 0 1.25rem 1.875rem rgba(0, 0, 0, 0.1);
    border-radius: 0.625rem;
    padding: 2.375rem 2rem 3.125rem;
  }

  img {
    width: 100%;
    height: 5.875rem;
    object-fit: cover;
    object-position: center;
    border-radius: 0.625rem;
    margin-bottom: 1.375rem;
  }

  & > div {
    h1 {
      font-family: var(--main-text) !important;
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.5625rem;
      text-align: left;
      color: var(--grey);
      margin-bottom: 0.625rem;
    }
  }

  p {
    font-size: 0.75rem;
    line-height: 0.9375rem;
    color: var(--black-green);
  }

  a {
    display: block;
    margin: 0 auto;
    padding: 0.625rem 0.75rem;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.375rem;
    text-align: center;
    background: var(--pink);
    border-radius: 0.625rem;
    color: var(--white);
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    bottom: 0;
    width: 100%;
    max-width: 148px;
  }
`;

const BlogCard = () => {
  return (
    <Article>
      <div>
        <img src="/images/blogHeader.png" alt="Blog Header" />
        <h1>Customer</h1>
        <p>
          The occupational traffic permit is one things in the company How do
          you a commercial traffic permit for freight transport to your
          business?
        </p>
      </div>
      <a href="/">Leia mais</a>
    </Article>
  );
};

export default BlogCard;
