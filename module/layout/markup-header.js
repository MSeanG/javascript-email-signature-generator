import Codex from '../codex.js';

const markupHeader = {
  render: () => {
    return Codex(
      [
        '<h1><div class="maxwidth"><i class="emblem">Mohawk Logo</i><span>Email Signature Generator</span></div></h1>',
        '<div class="direct" style="display: none">Make a Selection</div>',
        '<nav><section class="breadcrumb"><i class="symbol">Back Arrow</i></section></section></nav>'
      ],
      document.getElementById('mohawk')
    )
  }
}

export default markupHeader;
