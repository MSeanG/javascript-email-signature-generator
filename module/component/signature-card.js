import markupDirections from './markup-directions.js';
import Codex from '../codex.js';

const signaturCard = {
  callback: () => {
    console.log('signature card callback');
    const foobar = document.querySelector('section.foobar');
    if (foobar) {
      console.log('foobar exists')
    }
    else {
      console.log('no foobar');
    }
  },
  render: (data, h3, phtype, n, url_1, url_2) => {
    console.log(data);
    const markup = `
    <section class="foobar">
      <p>
        <div style="padding: 1rem; border: 1px solid #ddd; margin: 0 1rem">
          <table class="to-copy" cellpadding="0" cellspacing="0" border="0" width="350" style="text-align:left!important;font-family: Arial, Verdana, sans-serif;-webkit-text-size-adjust:none;font-size:8px;">
              <tbody>
                  <tr>
                      <td style="text-align:left!important;-webkit-text-size-adjust:none;font-size:10px;">
                          <p class="Uname2" style="margin:0;padding:0;-webkit-text-size-adjust:none;font-size:10px;mso-line-height-rule: exactly;">${data.fname} ${data.lname}</p>
                          <p style="margin:0;padding:0;-webkit-text-size-adjust:none;font-size:10px;mso-line-height-rule: exactly;"><span class="jobtitle"></span><span class="companyjob">${h3.innerText}</span></p>
                          <p style="margin:0;padding:0;-webkit-text-size-adjust:none;font-size:10px;"><span class="companynonurl1" style="font-weight:bold;">${url_1}</span> | <span class="companynonurl2" style="font-weight:bold;">${url_2}</span></p>
                          <p class="phone" style="margin:0;padding:0;-webkit-text-size-adjust:none;font-size:10px;"><span class="phonetype">${phtype}:</span> <a class="phonenum" style="text-decoration:none!important;color:#000!important;">${n}</a></p>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>

        <button class="copy-btn">Copy to Clipboard</button>
      </p>
    </section>
    ${markupDirections.render()}
  `;
  signaturCard.callback();
  return markup;
  }
  
}

export default signaturCard;
