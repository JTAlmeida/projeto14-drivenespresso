import { createGlobalStyle, css } from "styled-components";

const Reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  strong {
    font-weight: bold;
  }
`;

const Global = css`
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  html,
  body {
    width: 100vw;
    background-color: #fff8e7;
    font-family: "Roboto", sans-serif;
  }

  .root {
    width: 100vw;
    word-wrap: break-word;
  }

  button {
    border: none;
    cursor: pointer;
  }

  //BM SIDEBAR
  /* Position and sizing of burger button .*/
  .bm-burger-button {
    position: relative;
    width: 30px;
    height: 25px;
    left: 15px;
    top: 0px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #988c51;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #f5f5f5;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    min-width: 20%;
    max-width: 60%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #988c51;
    padding: 1.5em 1.5em 0;
    font-size: 1.5em;
  }

  /* Wrapper for item list */
  .bm-item-list {
    display: flex;
    flex-direction: column;
    color: #b8b7ad;
    padding: 0.5em;
  }

  /* Individual item */
  .bm-item {
    color: #f0f0f0;
    margin-bottom: 20px;
    text-align: left;
    text-decoration: none;
    transition: color 0.2s;
  }

  .bm-menu :nth-child(1) {
    display: flex;
    align-self: center;
  }

  .bm-menu a{
    position: relative;
    display: flex;
    align-self: center;
    width: auto;
    margin-bottom: 30px;
  }

  .bm-menu a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fafafa;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  .bm-menu a:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

  h4 {
    position: absolute;
    top: 20%;
    right: 10px;
    cursor: pointer;
  }

  h4 img {
    position: absolute;
    right: 8px;
    max-height: 25px;
  }

  /* Styling of overlay */
  .bm-overlay {
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 375px) {
  }
`;

const GlobalStyle = createGlobalStyle`
  ${Reset};
  ${Global};
`;

export default GlobalStyle;
