import btnNavHeading from './button-nav-heading.js';
import btnList from './button-list.js';
import baseUrl from './url-base.js';
import piForm from './form-personal-information.js';

const custom = {
  callback: () => {
    const createTitle = document.querySelector('button.custom');
    createTitle.addEventListener('click', () => {
      const inputTitle = document.querySelector('input.custom-title').value
      console.log(inputTitle) ;
      createTitle.value = inputTitle;
    })
    btnNavHeading()
  },

  render: () => {
    //const heading = 'Custom Signature',
    //titles = [
    //  'Custom Title'
    //],
    //link1 = 'Mowhawk Industries',
    //link2 = 'Residential Sales Operations';
//
    //return btnList(heading, titles, link1, link2);
    //const markup = `
    //  <input type="text" name="title" class="person">
    //  <input type="button" name="customTitle" value="Create Title">
    //`;
    //const buttons = document.querySelector('.buttons');
    //buttons.innerHTML = markup;

    document.querySelector('.breadcrumb').innerHTML = `<h2 class="previous order1"><div class="maxwidth navheight" data-route="${baseUrl}">Custom Signature</div></h2>`;
    const markup = `
    <div class="custom">
      <input type="text" name="title" class="custom-title" placeholder="Title">
      <!--<input type="button" name="customTitle" class="title" value="Create Title">-->
      <button class="title custom">Create Title</button>
    </div>
    `,

    link1 = ``,
    link2 = ``;

    return `<section class="buttons">${markup}</section>` + piForm('Mowhawk Industries', 'Residential Sales Operations');
  }
}

export default custom;
