import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 35.9375em) {
    padding-left: calc(var(--gutter) * 2);
    padding-right: calc(var(--gutter) * 2);
  }

  @media (min-width: 36em) {
    max-width: var(--container-sm);
  }

  @media (min-width: 48em) {
    max-width: var(--container-md);
  }

  @media (min-width: 62em) {
    max-width: var(--container-lg);
  }

  @media (min-width: 77em) {
    max-width: var(--container-xl);
  }
`;

const Container = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Container;
