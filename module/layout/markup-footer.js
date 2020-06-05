import Codex from '../codex.js';

const markupFooter = {

  //callback: () => {
  //  const footer = document.getElementById('pipe');
  //  footer.addEventListener('mouseover', () => {
  //    // Good place for a count incrementor
  //    console.log('You just moused over the footer!');
  //  })
  //},

  render: () => {
    const footer = document.getElementById('pipe');
    //return [Codex(['XIX'], footer), markupFooter.callback()];
    return Codex(['XIX'], footer);
  }

}

export default markupFooter;
