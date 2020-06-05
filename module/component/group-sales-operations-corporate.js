import markupNavBreadcrumb from './markup-nav-breadcrumb.js';
//import markupBtnList from './markup-button-list.js';
import baseUrl from './url-base.js';
import markupPiForm from './form-personal-information.js';
import markupDisplay from './markup-display.js';

const salesOperationsCorporate = {
  callback: () => {
    const createTitle = document.querySelector('button.custom'),
    direct = document.querySelector('div.direct'),
    customTitle = document.querySelector('form#customTitle'),
    divCustom = document.querySelector('div.custom'),
    //createTitle.addEventListener('click', event => {
    //  event.preventDefault();
    //  const inputTitle = document.querySelector('input.custom-title').value;
    //  console.log(inputTitle) ;
    //  if (inputTitle == '') {
    //    createTitle.value = 'I need no title'
    //  }
    //  else {
    //    createTitle.value = inputTitle;
    //  }
    //});

    buttonPressEvent = () => {
      event.preventDefault();
      
      const inputTitle = document.querySelector('input.custom-title').value;
      divCustom.remove();
      if (inputTitle == '') {
        createTitle.value = 'I need no title'
      }
      else {
        createTitle.value = inputTitle;
      }
    };

    createTitle.addEventListener('click', event => {
      console.log('click');
      //event.preventDefault();
      buttonPressEvent();
    });

    createTitle.addEventListener('keydown', event => {
      if (event.keyCode === 13) {
        console.log('enter');
        //event.preventDefault();
        return buttonPressEvent();
      }
    });

    markupDisplay.hide(direct);
    markupNavBreadcrumb()
  },

  render: () => {
    document.querySelector('.breadcrumb').innerHTML = `
    <i class="symbol">Back Arrow</i>
    <h2 class="previous order1" data-route="${baseUrl}">Sales Operations/Corporate</h2>
    `;
    //const markup = `
    //<div class="custom">
    //  <input type="text" name="title" class="custom-title" placeholder="Position Title" required>
    //  <!--<input type="button" name="customTitle" class="title" value="Create Title">-->
    //  <button class="title custom">Create Title</button>
    //</div>
    //`;

    const markup = `
    <div class="custom">
      <form id="customTitle">
        <input type="text" name="title" class="custom-title" placeholder="Position Title">
        <!--<input type="submit" name="customTitle" class="title" value="Create Title">-->
        <button class="title custom" type="submit">Create Title</button>
      </form>
    </div>
    `;

    return `<section class="buttons">${markup}</section>` + markupPiForm('Mowhawk Industries', 'Residential Sales Operations');
  }
}

export default salesOperationsCorporate;