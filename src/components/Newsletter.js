import styled from 'styled-components';

const Wrapper = styled.div`
  h2 {
    font-size: 1.9375rem;
    line-height: 2.4375rem;
    font-weight: 500;
    color: var(--green);
    margin-bottom: 3.125rem;

    @media (max-width: 47.9375em) {
      text-align: center;
    }
  }

  form {
    @media (min-width: 36em) {
      display: flex;
    }

    @media (min-width: 36em) {
      max-width: 533px;
    }
  }

  button {
    background: var(--green-1);
    appearance: none;
    border: none;
    padding: 0.9375rem;
    border-radius: 0.625rem;
    color: var(--white);
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.5625rem;
    text-align: center;
    box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.15);
    display: block;
    width: 100%;

    @media (min-width: 36em) {
      max-width: 11.25rem;
      margin-left: 0.75rem;
    }

    &:focus {
      outline: none;
    }
  }

  input {
    box-shadow: 0 1.25rem 2.5rem rgba(149, 149, 201, 0.2);
    background: var(--white);
    border-radius: 10px;
    border: 0.125rem solid var(--green-1);
    padding: 0.9375rem;
    flex: 1;
    font-weight: 500;
    font-size: 1.125rem;

    @media (max-width: 35.9375em) {
      width: 100%;
      display: block;
      margin-bottom: 0.9375rem;
    }

    &:focus {
      outline: none;
    }
  }
`;

const Newsletter = () => {
  return (
    <Wrapper>
      <h2>Quero saber mais sobre viagens incríveis e condições especiais!</h2>
      <form action="/" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          aria-label="Digite seu e-mail"
        />
        <button type="submit">Cadastrar</button>
      </form>
    </Wrapper>
  );
};

export default Newsletter;
