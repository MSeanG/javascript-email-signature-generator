import markupStyles from './layout/markup-styles.js'; // build markup for css files in the head tag as link tags
import markupHeader from './layout/markup-header.js'; // build markup for header tag
import markupFooter from './layout/markup-footer.js'; // build markup for footer tag

/**
 * Module components
 */
import AppEx from './appex.js'; // routing
import baseUrl from './component/url-base.js';
//console.log(baseUrl);

import groupList from './component/group-list.js';
import residentialSales from './component/group-residential-sales.js';
import karastanGodfreyHirst from './component/group-karastan-and-godfrey-hirst.js';
import residentialAccountManagerInsideSales from './component/group-residential-account-manager-inside-sales.js'
import builderMultiFamily from './component/group-builder-multi-family.js';
import mainstreetCommercial from './component/group-mainstreet-commercial.js';
import marketingCoordinators from './component/group-marketing-coordinators.js';
import salesOperationsCorporate from './component/group-sales-operations-corporate.js';
// set css, TODO: make a variable based on user choice
let css = ['common', 'flat'];

// route declaration
const routes = {
  [baseUrl]: groupList,
  [baseUrl + 'residential-sales']: residentialSales,
  [baseUrl + 'karastan-and-godfrey-hirst']: karastanGodfreyHirst,
  [baseUrl + 'residential-account-manager-inside-sales']: residentialAccountManagerInsideSales,
  [baseUrl + 'builder-multi-family']: builderMultiFamily,
  [baseUrl + 'mainstreet-commercial']: mainstreetCommercial,
  [baseUrl + 'marketing-coordinators']: marketingCoordinators,
  [baseUrl + 'sales-operations-corporate']: salesOperationsCorporate
  //[baseUrl + 'personal-information']: piForm
},

Index = () => {
  markupStyles.render(css);
  markupHeader.render();
  markupFooter.render();

  AppEx(routes);
};

export default Index;