const globalStyle = `
  html, body {
    font-size: 16px;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background-color: ghostwhite;
  }

  .markdown {
    img {
      max-width: 70%;
    }
    div {
      width: 100%;
      overflow: auto;
    }
  }

  .fade-appear {
    opacity: 0;
  }

  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: all .5s;
  }
`

export default globalStyle
