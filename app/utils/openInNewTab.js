/**
 * Open the given url in a new tab.
 *
 * @param {string} url  - URL to open in new tab
 */
export default url => () => {
  if (url !== '') {
    const win = window.open(url, '_blank');
    win.focus();
  }
};
