import Codex from '../codex.js';
import markupDisplay from './markup-display.js';

const markupNavBreadcrumb = () => {
  const titles = document.querySelectorAll('.title'),
  hdr = document.querySelector('header'),
  nav = document.querySelector('nav'),
  breadcrumb = document.querySelector('.breadcrumb'),
  buttons = document.querySelector('.buttons'),
  piform = document.querySelector('.pi-form'),
  //h4 = Codex([`<h4 style="display: none">Personal Information</h4>`], nav),

  render = () => {
    
    nav.addEventListener('click', event => {
      console.log('nav clicked');
      const h3 = document.querySelector('h3'),
      h4 = document.querySelector('h4.previous'),
      foobar = document.querySelector('section.foobar'),
      instructions = document.querySelector('div.instructions');

      if(h3 == event.target) {
        h3.remove();
        if (h4) {
          console.log('h4 found');
          h4.remove();
          if (foobar) {
            console.log('foobar exists')
          }
          else {
            console.log('no foobar');
          }
        }
        markupDisplay.toggle(buttons);
        markupDisplay.hide(piform);
        if (foobar) {
          foobar.remove();
          console.log('foobar exists')
        }
        else {
          console.log('no foobar');
        }
        if (instructions) {
          instructions.remove();
        }
      }
      else if (event.target == h4) {
        h4.remove();
        //markupDisplay.toggle(buttons);
        markupDisplay.toggle(piform);
        if (foobar) {
          console.log('foobar exists')
        }
        else {
          console.log('no foobar');
        }
        foobar.remove();
        instructions.remove();
      }
    })
  };

  titles.forEach(title => title.addEventListener('click', () => {

    markupDisplay.toggle(buttons);
    markupDisplay.show(piform);

    Codex(['<h3 class="previous order2">' + title.value + '</h3>'], breadcrumb);
    const phoneType = () => {
      const h2 = document.querySelector('h2').innerText;
      console.log(h2);
      console.log(title.value);
      const mobile = document.querySelector('input#phtmobile');
      const labelMobile = document.querySelector('label[for="phtmobile"]');
      const office = document.querySelector('input#phtoffice');
      const labelOffice = document.querySelector('label[for="phtoffice"]');
      if (h2 == 'Residential Account Manager (Inside Sales)' || h2 == 'Marketing Coordinators' || title.value == 'Regional Executive Assistant, Mohawk Industries') {
        mobile.removeAttribute('checked');
        //markupDisplay.hide(labelMobile);
        office.setAttribute('checked', 'checked');
        markupDisplay.show(labelOffice);
      } else if (h2 == 'Sales Operations/Corporate') {
        markupDisplay.show(labelMobile);
        markupDisplay.show(labelOffice);
      } else {
        markupDisplay.show(labelMobile);
      }
      //if (h2div == 'Sales Operations/Corporate') {
      //  markupDisplay.show(labelOffice);
      //}
    }
    render();
    phoneType();
  }));

}

export default markupNavBreadcrumb;
