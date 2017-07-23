const globalStyle = `
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: ghostwhite;
  }

  .slide-appear {
      transform: translateX(-100%);
  }

  .slide-appear.slide-appear-active {
      transform: translateX(0);
      transition: all .5s;
  }
`;

export default globalStyle;
