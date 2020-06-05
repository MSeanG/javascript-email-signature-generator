import markupBtnRoute from './markup-button-route.js';
import markupDisplay from './markup-display.js';
import Codex from '../codex.js';

const groupList = {
  callback: () => {
    const h2 = document.querySelector('h2'),
    h3 = document.querySelector('h3'),
    direct = document.querySelector('div.direct');
    markupDisplay.toggle(direct);
    if (h2) {
      h2.remove();
    }
    if (h3) {
      h3.remove();
    }
    document.body.addEventListener('click', event => {
      if (event.target.classList.contains('group')) {
        markupDisplay.hide(direct);
      }
      else {
        return
      }
    })
  },

  render: (routes) => {
    let markup = '';
    const array = Array.from(Object.keys(routes)),
    paths = array.slice(1);

    paths.forEach(path => {
      const route = path.split('/').pop(),
      title = route.split('-').join(' '),
      display = markupBtnRoute(title, path, 'group');

      return markup += display
    })

    //return `<section class="buttons">${markup}</section>`
    return '<section class="buttons">' + markup + '</section>';
  }
}

export default groupList;
