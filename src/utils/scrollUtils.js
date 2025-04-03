/**
 * Smoothly scrolls to an element with the given ID
 * @param {string} elementId - The ID of the element to scroll to (without the # symbol)
 * @param {number} offset - Optional offset from the top (default: 80px for navbar height)
 */
export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);

  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

/**
 * Checks if a URL has a hash and scrolls to that element
 * @param {string} url - The URL to check for a hash
 */
export const handleHashScroll = (url) => {
  if (!url) return;

  // Check if the URL has a hash
  const hash = url.split('#')[1];
  if (hash) {
    // Wait a little to ensure the page has loaded
    setTimeout(() => {
      scrollToElement(hash);
    }, 100);
  } else {
    // If no hash, scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};
