import markupNavBreadcrumb from './markup-nav-breadcrumb.js';
import markupBtnList from './markup-button-list.js';

const marketingCoordinators = {
  callback: () => {
    markupNavBreadcrumb()
  },

  render: () => {
    const heading = 'Marketing Coordinators',
    titles = [
      'Regional Marketing Manager, Mohawk Industries'
    ],
    link1 = '<span class="companyurl1" style="font-weight: bold;">MohawkFlooring.com</span>',
    link2 = '<span class="companyurl2" style="font-weight: bold;">AladdinCommercial.com</a>';
  
    return markupBtnList(heading, titles, link1, link2);
  }
}

export default marketingCoordinators;
