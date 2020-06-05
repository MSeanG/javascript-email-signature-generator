import Codex from '../codex.js';

const markupStyles = {

  render: (css) => {
    //console.log(css);
    let sheets = css;
    sheets.forEach( sheet => {
      Codex([`<link rel="stylesheet" href="module/style/${sheet}.css">`], document.head);
    })
  }

};

export default markupStyles;
