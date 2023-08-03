/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll('section'); // call each section.
const navBarList = document.getElementById('navbar__list'); //call the navbar .
const scrollTopBtn = document.getElementById('scroll-top'); // call the scroll Button.
const navMenu = document.querySelector('.page__header'); // call the header.
const collapseBtn = document.querySelectorAll('.collapse'); // call the collapse ButtonS.
/**
 * End Global Variables
 *
 * Begin Main Functions
 *
 */

// build the nav
function buildNavItems() {
  // loop the sections
  sections.forEach((section) => {
    const listItem = document.createElement('li'); // create a list item
    const sectionLinks = document.createElement('a'); // create an anchor
    sectionLinks.innerHTML = section.dataset.nav; // add the section name to the anchor
    sectionLinks.classList.add('menu__link'); // add the syle cass for menu links
    sectionLinks.setAttribute('herf', section.getAttribute('id')); // put the secton   ID  as the links 'herf'
    listItem.appendChild(sectionLinks); // append the link (anchor) to the list item
    navBarList.appendChild(listItem); // append each list item to the navbar
  });
}

// Add class 'active' to section when near top of viewport
function addActiveClass() {
  // loop the sections
  sections.forEach((section) => {
    // listen for scroll event
    window.addEventListener('scroll', () => {
      let sectionPosetion = section.getBoundingClientRect(); // get the location of the secton
      if (sectionPosetion.top <= 300 && sectionPosetion.top >= -300) {
        section.classList.add('active'); // adding the active class if the section hit certin location (top of the page)
        let anchors = document.querySelectorAll('a'); // calling each anchor After they are created
        // loop through anchors using for loop
        for (let i = 0; i < anchors.length; i++) {
          anchors[i].classList.remove('active'); // removing the active class form each anchor
        }
        anchors.forEach((anchor) => {
          if (anchor.getAttribute('herf') == section.getAttribute('id')) {
            anchor.classList.add('active'); // adding active class to each anchor that matches the section ID
          }
        });
      } else {
        section.classList.remove('active'); // if the section ID dont match , remove the active class
      }
    });
  });
}

// Scroll to anchor ID using scrollTO event
function scrollToSection() {
  let anchors = document.querySelectorAll('a');
  anchors.forEach((anchor) => {
    // add event listener to each anchor and listen for 'click' event
    anchor.addEventListener('click', (e) => {
      e.preventDefault(); // preventign the defult for anchor
      let sellectedItem = document.getElementById(anchor.getAttribute('herf')); // get the selected section using anchor link'herf'
      const topPosetion =
        sellectedItem.getBoundingClientRect().top + window.scrollY; // the top postion of the page
      window.scrollTo({
        top: topPosetion - 80, // make the window scroll to the top posetion and "minus 80px for adjusting"
        behavior: 'smooth', // set the behavior style to smooth to make the page scroll by a smooth way.
      });
    });
  });
}

// Hide fixed navigation while not scrolling
function hideFixedNav() {
  let isScrolling;

  // Listen for scroll events
  window.addEventListener('scroll', function (event) {
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
      navMenu.style.transform = 'translateY(-200px)';
    }, 1600);
    navMenu.style.transform = 'translateY(0px)';
  });
}

// add scroll to top button
function scrollBtn() {
  // listen for a scroll events
  window.addEventListener('scroll', () => {
    // if the body hit certain postion the button will be hidden/
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollTopBtn.style.transform = 'translateY(0px)';
    }
    // else the scroll to top button will be showen
    else {
      scrollTopBtn.style.transform = 'translateY(100px)';
    }
  });
}
// Make section collapse
function sectionCollapse() {
  // looping each collapse button
  for (i = 0; i < collapseBtn.length; i++) {
    // add event listener to each button
    collapseBtn[i].addEventListener('click', function () {
      // toggle the active class for the clicked button section heading
      this.parentElement.classList.toggle('active');
      var content = this.parentElement.nextElementSibling; // call the content element for selectd section
      // if  the sellectd section content element is hidden (collapsed) , make it show else make it collapse
      if (content.style.display == 'none') {
        this.innerHTML = '<i class="fa-solid fa-circle-minus"></i>'; // change the collapse button icon
        content.style.display = 'block'; // show the content element
      } else {
        this.innerHTML = '<i class="fa-solid fa-circle-plus"></i>'; // change the collapse button icon
        content.style.display = 'none'; // hide the content element
      }
    });
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */
// add evenet listener to the scroll to top button and listien for a 'clock'
scrollTopBtn.addEventListener('click', () => {
  // if the button is clicked the window scroll to the top by a smooth behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
/**
 * End Events
 * Begin call functions
 *
 */
// Build menu
buildNavItems();

// Scroll to section on link click
scrollToSection();

// Set sections as active
addActiveClass();

// Hide fixed navbar
hideFixedNav();
// Add scroll button
scrollBtn();
// section collapse
sectionCollapse();
/**
 * End call functions
 *
 */
