import styled from 'styled-components';
import Container from './Container';

const Section = styled.section`
  height: 758px;
  background: url('/images/hero-bg.png') no-repeat center center;
  background-size: cover;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 218px;
    background: url('/images/wave.png') no-repeat center center;
    background-size: cover;
    position: absolute;
    bottom: -86px;
    left: 0;
  }
`;

const HeroContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Hero = () => {
  return (
    <Section>
      <HeroContainer>
        <img src="/images/logo.svg" alt="Logotipo Curta a Vida" />
      </HeroContainer>
    </Section>
  );
};

export default Hero;
