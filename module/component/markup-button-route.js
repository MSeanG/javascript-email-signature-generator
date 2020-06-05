const markupBtnRoute = (content, path, className) => {
  const button = `<button class="text-transform-capitalize ${className}" data-route="${path}">${content}</button>`;
  return button;
}

export default markupBtnRoute;
