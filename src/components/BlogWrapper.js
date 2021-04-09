import React from 'react';
import styled from 'styled-components';
import BlogCard from './BlogCard';

const Wrapper = styled.section`
  display: grid;
  gap: 2.5rem 1.875rem;

  @media (min-width: 48em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 62em) {
    grid-template-columns: repeat(3, 1fr);
  }

  & > * {
    @media (max-width: 47.9375em) {
      width: 100%;
      max-width: 300px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const BlogWrapper = () => {
  return (
    <Wrapper>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </Wrapper>
  );
};

export default BlogWrapper;
