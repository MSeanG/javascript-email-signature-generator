const AppEx = (paths) => {

  const routes = paths,

  render = (target) => {
    document.querySelector('main').innerHTML = routes[target].render(routes);
    routes[target].callback();
  },

  route = (path) => {
    if(path) {
      window.history.pushState({}, path, window.location.origin + path);
      render(path)
    }
    else {
      return console.log('no path passed to route');
    }
  },

  handle = () => {
    document.body.addEventListener('click', event => {
      route(event.target.getAttribute('data-route'))
    })
  };

  window.addEventListener('load', render(window.location.pathname), false);

  window.onpopstate = () => render(window.location.pathname);

  document.addEventListener('DOMContentLoaded', handle(), false);

};

export default AppEx;
