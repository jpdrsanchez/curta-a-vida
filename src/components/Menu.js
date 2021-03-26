import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 1.8125rem;
  height: 1.1875rem;
  border: none;
  background: none;
  appearance: none;
  position: relative;

  &:focus {
    outline: none;
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 0.1875rem;
    background: var(--pink);
    position: absolute;
    transition: all 0.5s;
  }

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 0.1875rem;
    background: var(--pink);
    box-shadow: 0 0.4375rem var(--pink), 0 -0.4375rem var(--pink);
    transition: all 0.5s;
  }

  &.active {
    &::after {
      transform: rotate(-45deg);
    }

    &::before {
      transform: rotate(45deg);
      box-shadow: none;
    }
  }
`;

const Menu = ({ className }) => {
  const [active, setActive] = useState(false);

  return (
    <Button
      aria-label="Abrir Menu"
      type="button"
      className={`${active ? 'active' : ''} ${className}`}
      onClick={() => setActive(!active)}
    />
  );
};

export default Menu;
