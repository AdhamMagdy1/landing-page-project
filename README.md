# Landing Page Project
give it a try https://landing-page-adham.netlify.app/
## Table of Contents

- [OVERVIEW](#OVERVIEW)
- [HTML](#HTML)
- [CSS](#CSS)
- [JS](#JS)

## OVERVIEW 

### Manipulating the DOM

landing page project, the goal was to change the page from static to dynamic by using javascript.

added functionality to the page and changed the style and more.

## HTML

- added more sections to the page.
- added a CDN link to FontAwsome to use icons.
- created a scroll-up button.
- created collapse buttons for each section.

## CSS

- changed the style of different elements.
- created an ACTIVE class that toggles through sections.
- added Style to Buttons and Icons.
- added Style to li (list items in the Navbar).
- created Active for the section heading.

## JS

### most of the work was in these sections!

- called the Elements form The DOM using document.querrySelector(), document.querrySelectorAll(), and document.getElementByID().
- created a function that builds the nav dynamically.

  - each section added to the DOM added automatically to the nav bar
  - used Data-\* attribute to link each anchor to its section

- created function to Scroll to anchor ID using scrollTo() event
  - looped through each anchor using forEach().
  - added event listener to each anchor using .addEventListenr()
  - listen for a "click"
  - if anchor is clicked page will scroll to its section using getBoundingClientRect() function.
- created a function to Hide fixed navigation while not scrolling
  - added an event listener to the window to Listen for scroll events.
    -used setTimeOut() function to detect user stop scrolling.
- created function to add scroll to top button
  - added event listener to listen for Button click
  - added event listener to the window to detect if the user scrolled to page fold.
- created function to Make section collapse
  - added event listener to the collapse button in each section.
