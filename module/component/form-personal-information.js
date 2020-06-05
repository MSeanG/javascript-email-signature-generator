import Codex from "../codex.js";
//import markupDirections from './markup-directions.js';
import signatureCard from './signature-card.js';

const markupPiForm = (link1, link2) => {
  const url_1 = link1;
  const url_2 = link2;

  const markup = () => {
    return `
    <section class="pi-form" style="display: none">
      <h4 class="order3"><div class="maxwidth navheight">Personal Information</div></h4>
      <form id="piForm">
        <input type="text" name="fname" class="person" placeholder="First Name" required>
        <input type="text" name="lname" class="person" placeholder="Last Name" required><br>
        <input name="phonenumber" class="number" placeholder="Phone Number" maxlength="16" required><br>
        <ul class="phonetypes">
          <li>
            <input type="radio" name="phonetype" class="phone" value="M" id="phtmobile" checked>
            <label class="phone" for="phtmobile" style="display: none">Mobile Phone</label>
          </li>
          <li>
            <input type="radio" name="phonetype" class="phone" value="O" id="phtoffice">
            <label class="phone" for="phtoffice" style="display: none">Office Phone</label>
          </li>
        </ul>
        <input type="submit" name="submit" value="Create Signature">
      </form>
    </section>
    `;
  }
  const show = (e) => {
    e.style.display = 'block';
  },

  hide = (e) => {
    e.style.display = 'none';
  },

  toggle = (e) => {
    if (window.getComputedStyle(e).display === 'block') {
      hide(e);
      return
    }
    else {
      show(e)
    }
  };

  const main = document.querySelector('main');
  const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    data[element.name] = element.value;
    return data;
  }, {});

  const info = (data) => {
    const h3 = document.querySelector('h3');
    const phtype = document.querySelector('input[name="phonetype"]:checked').value;
    const n = document.querySelector('.number').value;
    const markup = signatureCard.render(data, h3, phtype, n, url_1, url_2);

    return markup;
  };

  const isNumericInput = (event) => {
    const key = event.keyCode;
    return (
      (key >= 48 && key <= 57) || // allow number line
      (key >= 96 && key <= 105) // allow nuber pad
    )
  };

  const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // allow Shift, Home, End
    (key === 8 || key == 9 || key === 13 || key === 46) || // allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // allow left, up, right, down
    ( // allow Ctrl/Command + A,C,V,X,Z
      (event.ctrlKey === true || event.metaKey === true ) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
    )
  };

  const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if(!isNumericInput(event) && !isModifierKey(event)){
      event.preventDefault();
    }
  };

  const formatToPhone = (event) => {
    if(isModifierKey(event)) {return;}
    // I don't like to type things more than once
    const target = event.target,
    input = event.target.value.replace(/\D/g,'').substring(0,10), // first ten digits of input only
    areaCode = input.substring(0,3),
    prefix = input.substring(3,6),
    lineNumber = input.substring(6,10);

    if(input.length > 6){target.value = `${areaCode}.${prefix}.${lineNumber}`;}
    else if(input.length > 3){target.value = `${areaCode}.${prefix}`;}
    else if(input.length > 0){target.value = `${areaCode}`;}
  };

  main.addEventListener('click', event => {
    const submit = document.querySelector('input[type="submit"]');
    const numbers = document.querySelectorAll('.number');
    const form = document.querySelector('form');
    var clipboard = new ClipboardJS('.copy-btn', {
      target: function() {
        return document.querySelector('.to-copy');
      }
    });
  
    clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
  
    Array.from(numbers).forEach(number => {
      const n = document.querySelector('.number').value;
      number.addEventListener('keydown',enforceFormat);

      number.addEventListener('keyup',formatToPhone);
    })
    if (event.target === submit) {
      event.preventDefault();
      const data = formToJSON(form.elements);
      const piform = document.querySelector('.pi-form');
      const h4 = document.querySelector('h4');
      const breadcrumb = document.querySelector('.breadcrumb');
      const foobar = document.querySelector('section.foobar'),
      instructions = document.querySelector('div.instructions');

      if (h4) {
        h4.remove();
      }

      toggle(piform);

      Codex([`<h4 class="previous order3">Personal Information Form</h4>`], breadcrumb);
      Codex([`${info(data)}`], main);

      if (foobar) {
        console.log('foobar exists')
      }
      else {
        console.log('no foobar');
      }
      
      if (event.target === h4) {
        if (foobar) {
          console.log('foobar exists')
        }
        else {
          console.log('no foobar');
        }
        //toggle(h4)
        //h4.remove();
        //toggle(piform);
        foobar.remove();
        instructions.remove();
      }
    }
  })

  return markup();
}

export default markupPiForm;
