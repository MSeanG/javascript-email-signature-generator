import markupNavBreadcrumb from './markup-nav-breadcrumb.js';
import markupBtnList from './markup-button-list.js';

const karastanGodfreyHirst = {
  callback: () => {
    markupNavBreadcrumb()
  },

  render: () => {
    const heading = 'Karastan & Godfrey Hirst',
    titles = [
      'Territory Manager, Mowhawk Industries',
      'District Manager, Mowhawk Industries',
      'Regional Vice President, Mowhawk Industries'
    ],
    link1 = '<a class="companyurl1" href="https://www.karastan.com/" style="text-decoration:underline!important;color:#000!important;">Karastan.com</a>',
    link2 = '<a class="companyurl2" href="https://www.godfreyhirst.com/" style="text-decoration:underline!important;color:#000!important;">Godfreyhirst.com</a>';

    return markupBtnList(heading, titles, link1, link2);
  }
}

export default karastanGodfreyHirst;
