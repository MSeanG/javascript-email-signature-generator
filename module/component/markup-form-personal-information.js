import Codex from "../codex.js";

const markupPiForm = (link1, link2, numberType) => {
  const url_1 = link1;
  const url_2 = link2;
  const phone = numberType;
  const main = document.querySelector('main');
  const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    data[element.name] = element.value;
    return data;
  }, {});
  const info = (data) => {
    const h3 = document.querySelector('h3');
    //console.log(data.phonetype);
    const phtype = document.querySelector('input[name="phonetype"]:checked').value;
    //const p = document.querySelector('.prefix').value;
    //const a = document.querySelector('.area-code').value;
    //const l = document.querySelector('.line').value;
    //const number = p + '.' + a + '.' + l;
    const n = document.querySelector('.number').value;
    
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


    `;
    
    return markup;
  };

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

  const markup = () => {
    const h2 = document.querySelector('h2').innerText;
    if (h2 == 'Residential Account Manager (Inside Sales)' || h2 == 'Marketing Coordinators') {
      return `
      <section class="pi-form" style="display: none">
      <h4 class="order3"><div class="maxwidth navheight">Personal Information</div></h4>
      <form id="piForm">
        <input type="text" name="fname" class="person" placeholder="First Name" required>
        <input type="text" name="lname" class="person" placeholder="Last Name" required><br>
        <input name="phonenumber" class="number" placeholder="Phone Number" maxlength="16" required><br>
        <!--<ul class="numbers">
          <li>
            <span>Phone Number</span>
            <input name="prefix" class="prefix number" maxlength="3" required>
            <input name="areaCode" class="area-code number" maxlength="3" required>
            <input name="lineNumber" class="line number" maxlength="4" required>
          </li>
        </ul>-->
        <ul class="phonetypes">
          <li>
            <input type="radio" name="phonetype" class="phone" value="O" id="phtoffice" checked>
            <label class="phone" for="phtoffice">Office Phone</label>
          </li>
          <li>
            <input type="radio" name="phonetype" class="phone" value="M" id="phtmobile">
            <label class="phone" for="phtmobile" style="display: none">Mobile Phone</label>
          </li>
        </ul>
        <input type="submit" name="submit" value="Create Signature">
      </form>
    </section>
      `;
    } else if ( h2 == 'Sales Operations/Corporate') {
      return `
      <section class="pi-form" style="display: none">
      <h4 class="order3"><div class="maxwidth navheight">Personal Information</div></h4>
      <form id="piForm">
        <input type="text" name="fname" class="person" placeholder="First Name" required>
        <input type="text" name="lname" class="person" placeholder="Last Name" required><br>
        <input name="phonenumber" class="number" placeholder="Phone Number" maxlength="16" required><br>
        <!--<ul class="numbers">
          <li>
            <span>Phone Number</span>
            <input name="prefix" class="prefix number" maxlength="3" required>
            <input name="areaCode" class="area-code number" maxlength="3" required>
            <input name="lineNumber" class="line number" maxlength="4" required>
          </li>
        </ul>-->
        <ul class="phonetypes">
          <li>
            <input type="radio" name="phonetype" class="phone" value="O" id="phtoffice" checked>
            <label class="phone" for="phtoffice">Office Phone</label>
          </li>
          <li>
            <input type="radio" name="phonetype" class="phone" value="M" id="phtmobile">
            <label class="phone" for="phtmobile">Mobile Phone</label>
          </li>
        </ul>
        <input type="submit" name="submit" value="Create Signature">
      </form>
    </section>
      `;
    } else {
      return `
      <section class="pi-form" style="display: none">
      <h4 class="order3"><div class="maxwidth navheight">Personal Information</div></h4>
      <form id="piForm">
        <input type="text" name="fname" class="person" placeholder="First Name" required>
        <input type="text" name="lname" class="person" placeholder="Last Name" required><br>
        <input name="phonenumber" class="number" placeholder="Phone Number" maxlength="16" required><br>
        <!--<ul class="numbers">
          <li>
            <span>Phone Number</span>
            <input name="prefix" class="prefix number" maxlength="3" required>
            <input name="areaCode" class="area-code number" maxlength="3" required>
            <input name="lineNumber" class="line number" maxlength="4" required>
          </li>
        </ul>-->
        <ul class="phonetypes">
          <li>
            <input type="radio" name="phonetype" class="phone" value="O" id="phtoffice" checked>
            <label class="phone" for="phtoffice">Office Phone</label>
          </li>
          <li>
            <input type="radio" name="phonetype" class="phone" value="M" id="phtmobile">
            <label class="phone" for="phtmobile">Mobile Phone</label>
          </li>
        </ul>
        <input type="submit" name="submit" value="Create Signature">
      </form>
    </section>
      `;
    }
    //return markup;
  }

  main.addEventListener('click', event => {
    const submit = document.querySelector('input[type="submit"]');
    const form = document.querySelector('form');
    if (event.target === submit) {
      event.preventDefault();
      const data = formToJSON(form.elements);
      const piform = document.querySelector('.pi-form');
      toggle(piform);
      const breadcrumb = document.querySelector('.breadcrumb');
      Codex([`<h4 class="previous order3">Personal Information Form</h4>`], breadcrumb);
      Codex([`${info(data)}`], main);
      const h4 = document.querySelector('h4.previous div');
      h4.addEventListener('click', event => {
        if (event.target === h4) {
          toggle(h4)
          toggle(piform);
          foobar.remove();
        }
      })
    }
  })
  return markup();
}

export default markupPiForm;
