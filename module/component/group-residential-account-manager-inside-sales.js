import markupNavBreadcrumb from './markup-nav-breadcrumb.js';
import markupBtnList from './markup-button-list.js';

const residentialAccountManagerInsideSales = {
  callback: () => {
    markupNavBreadcrumb()
    //const h3 = document.querySelector('h3');
    //const ramis = document.querySelector('h2 div').innerText;
  },

  render: () => {
    const heading = 'Residential Account Manager (Inside Sales)',
    titles = [
      'Residential Account Manager, Mowhawk Industries'
    ],
    link1 = '<a class="companyurl1" href="https://www.mohawkflooring.com/" style="text-decoration:underline!important;color:#000!important;">MohawkFlooring.com</a>',
    link2 = '<a class="companyurl2" href="https://www.aladdincommercial.com/" style="text-decoration:underline!important;color:#000!important;">AladdinCommercial.com</a>';

    return markupBtnList(heading, titles, link1, link2);
  }
}

export default residentialAccountManagerInsideSales;