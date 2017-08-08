const globalStyle = `
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
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
