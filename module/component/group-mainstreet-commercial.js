import markupNavBreadcrumb from './markup-nav-breadcrumb.js';
import markupBtnList from './markup-button-list.js';

const mainstreetCommercial = {
  callback: () => {
    markupNavBreadcrumb()
  },

  render: () => {
    const heading = 'Mainstreet Commercial',
    titles = [
      'Business Development Manager - Aladdin Commercial'
    ],
    link1 = 'Mohawk Industries',
    link2 = '<a class="companyurl2" href="https://www.aladdincommercial.com/" style="text-decoration:underline!important;color:#000!important;">AladdinCommercial.com</a>';

    return markupBtnList(heading, titles, link1, link2);
  }
}

export default mainstreetCommercial;
