import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  ${reset};

  :root {
    /* Typography */
    --main-title: 'Satisfy', cursive;
    --main-text: 'Quicksand', sans-serif;

    /* Colors */
    --pink: #e496a9;
    --grey: #374352;
    --black-green: #626780;
    --green: #6c7c7a;
    --green-1: #bed1ce;
    --white: #fff;
    --body-bg: #f9f9f9;

    /* Units */
    --gutter: .9375rem; // 15px
    --container-xl: 75rem; // 1140px
    --container-lg: 60rem; // 960px
    --container-md: 45rem; // 720px
    --container-sm: 33.75rem; // 540px
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: var(--body-bg);
    color: var(--grey);
    font-family: var(--main-text);
    background-image: url('/images/body-detail.svg');
    background-position: left bottom -250px;
    background-repeat: no-repeat;
  }

  a {
    color: var(--grey);
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
    display: block;
  }
`;

export default GlobalStyles;
