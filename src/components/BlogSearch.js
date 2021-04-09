import { CgSearch } from 'react-icons/cg';
import styled from 'styled-components';

const Form = styled.form`
  position: relative;

  input {
    box-shadow: 0 1.25rem 2.5rem rgba(149, 149, 201, 0.2);
    background: var(--white);
    border-radius: 10px;
    border: 0.125rem solid var(--green-1);
    padding: 0.9375rem;
    flex: 1;
    font-weight: 500;
    font-size: 1.125rem;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  button {
    color: var(--green-1);
    font-size: 1.5rem;
    padding: 0;
    appearance: none;
    border: none;
    background: none;
    transition: 0.3s all;
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% + 0.125rem));
    right: 0.9375rem;

    &:focus {
      outline: none;
    }

    &:hover {
      color: var(--black-green);
    }
  }
`;

const BlogSearch = () => {
  return (
    <Form action="#" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="pesquisar"
        id="pesquisar"
        placeholder="pesquisar"
        aria-label="pesquisar"
      />
      <button aria-label="Pesquisar" type="submit">
        <CgSearch />
      </button>
    </Form>
  );
};

export default BlogSearch;
