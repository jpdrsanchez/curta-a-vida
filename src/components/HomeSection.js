import styled from 'styled-components';
import Container from './Container';
import HomeCta from './HomeCta';
import Newsletter from './Newsletter';

const Section = styled.section`
  padding-top: 7.5rem;
  padding-bottom: 11.875rem;
`;

const SectionContainer = styled(Container)`
  display: grid;
  gap: 1.875rem;
  align-items: center;

  @media (min-width: 48em) {
    grid-template-columns: 1fr 1fr;
  }
`;

const HomeSection = () => {
  return (
    <Section>
      <SectionContainer>
        <Newsletter />
        <HomeCta />
      </SectionContainer>
    </Section>
  );
};

export default HomeSection;
