import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--white);
  box-shadow: 0 1.25rem 2.5rem rgba(228, 150, 169, 0.21);
  border-radius: 0.625rem;
  text-align: center;
  padding: 2.8125rem 2rem 3.25rem;

  h2 {
    color: var(--pink);
    font-family: var(--main-title);
    font-size: 2.875rem;
    margin-bottom: 1.5rem;
    max-width: 375rem;
    margin-right: auto;
    margin-left: auto;
  }

  a {
    display: block;
    width: 100%;
    max-width: 11.25rem;
    margin-left: auto;
    margin-right: auto;
    color: var(--white);
    background: var(--pink);
    padding: 0.9375rem;
    border-radius: 0.625rem;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5625rem;
  }
`;

const HomeCta = () => {
  return (
    <Wrapper>
      <h2>Quero uma viagem personalizada</h2>
      <a href="/">Clique aqui</a>
    </Wrapper>
  );
};

export default HomeCta;
