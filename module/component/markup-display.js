const markupDisplay = {
  show: (e) => {
    e.style.display = 'block';
  },

  hide: (e) => {
    e.style.display = 'none';
  },

  toggle: (e) => {
    if (window.getComputedStyle(e).display === 'block') {
      markupDisplay.hide(e);
      return
    }
    else {
      markupDisplay.show(e)
    }
  }
}

export default markupDisplay;
