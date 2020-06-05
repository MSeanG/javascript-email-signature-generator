import markupNavBreadcrumb from './markup-nav-breadcrumb.js';
import markupBtnList from './markup-button-list.js';

const residentialSales = {
  callback: () => {
    markupNavBreadcrumb()
  },

  render: () => {
    console.log('render grs');
    const heading = 'Residential Sales',
    titles = [
      'Territory Manager, Mohawk Industries',
      'District Manager, Mohawk Industries',
      'Regional Operations Manager, Mohawk Industries',
      'Regional Executive Assistant, Mohawk Industries',
      'Regional Vice President, Mohawk Industries'
    ],
    link1 = '<a class="companyurl1" href="https://www.mohawkflooring.com/" style="text-decoration:underline!important;color:#000!important;">MohawkFlooring.com</a>',
    link2 = '<a class="companyurl2" href="https://www.aladdincommercial.com/" style="text-decoration:underline!important;color:#000!important;">AladdinCommercial.com</a>';

    return markupBtnList(heading, titles, link1, link2);
  }
}

export default residentialSales;
