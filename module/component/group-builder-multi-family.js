import markupNavBreadcrumb from './markup-nav-breadcrumb.js';
import markupBtnList from './markup-button-list.js';

const builderMultiFamily = {
  callback: () => {
    markupNavBreadcrumb()
  },

  render: () => {
    const heading = 'Builder Multi-Family',
    titles = [
      'Business Development Manager - Builder',
      'Business Development Manager - Builder/Multi-Family',
      'Business Development Manager - Multi-Family',
      'Director, National Accounts - Builder/Multi-Family'
    ],
    link1 = '<a class="companyurl1" href="https://www.mohawkportico.com/" style="text-decoration:underline!important;color:#000!important;">MohawkPortico.com</a>',
    link2 = '<a class="companyurl2" href="https://www.aladdincommercial.com/" style="text-decoration:underline!important;color:#000!important;">AladdinCommercial.com</a>';

    return markupBtnList(heading, titles, link1, link2);
  }
}

export default builderMultiFamily;
