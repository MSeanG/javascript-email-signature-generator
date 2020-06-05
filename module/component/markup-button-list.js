import baseUrl from './url-base.js';
//import piForm from './form-personal-information.js';
//import markupPiForm from './markup-form-personal-information.js';
import markupPiForm from './form-personal-information.js';
import markupDisplay from './markup-display.js';

const btnList = (heading, titles, link1, link2, phoneType) => {
  //document.querySelector('.breadcrumb').innerHTML = `<h2 class="previous order1">${heading}<i class="symbol">Back Arrow</i></h2>`;
  //const direct = document.querySelector('div.direct');
  //markupDisplay.toggle(direct);
  document.querySelector('i.symbol').insertAdjacentHTML('afterend',`<h2 class="previous order1" data-route="${baseUrl}">${heading}</h2>`);
  let markup = '';
  titles.forEach(title => {
    markup += `<button class="title" value="${title}">${title}</button>`;
  })
  return `<section class="buttons">${markup}</section>` + markupPiForm(link1, link2, phoneType);
}

export default btnList;
