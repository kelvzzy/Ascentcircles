/**
 * Navigation utility for handling both in-page scrolling and cross-page navigation
 */

/**
 * Navigate to a section - handles both same-page scrolling and cross-page navigation
 * @param href - The target href (e.g., '#email-capture' or '/build')
 * @param currentPath - Optional current path to determine if navigation is needed
 */
export function navigateToSection(href: string, currentPath?: string) {
  // If it's a hash link
  if (href.startsWith('#')) {
    const element = document.querySelector(href);
    
    // If element exists on current page, scroll to it
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Element doesn't exist on this page, navigate to home page with hash
      window.location.href = `/${href}`;
    }
  } else {
    // It's a route link, navigate normally
    window.location.href = href;
  }
}
