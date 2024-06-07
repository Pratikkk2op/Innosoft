// Create head element
var head = document.getElementsByTagName('head')[0];

// Create meta elements
var metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');

var metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

// Create title element
var title = document.createElement('title');
title.textContent = "Innosoft | Innovative Solutions for Your Business Growth";

// Append meta and title elements to head
head.appendChild(metaCharset);
head.appendChild(metaViewport);
head.appendChild(title);

// Create link elements for stylesheets
var linkStylesheet1 = document.createElement('link');
linkStylesheet1.setAttribute('rel', 'stylesheet');
linkStylesheet1.setAttribute('href', 'styles.css');

var linkStylesheet2 = document.createElement('link');
linkStylesheet2.setAttribute('rel', 'stylesheet');
linkStylesheet2.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

var linkStylesheet3 = document.createElement('link');
linkStylesheet3.setAttribute('rel', 'stylesheet');
linkStylesheet3.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

// Append link elements to head
head.appendChild(linkStylesheet1);
head.appendChild(linkStylesheet2);
head.appendChild(linkStylesheet3);

// Create body element
var body = document.getElementsByTagName('body')[0];

// Create navbar element
var nav = document.createElement('nav');
nav.setAttribute('class', 'navbar');

// Create div container for navbar
var navContainer = document.createElement('div');
navContainer.setAttribute('class', 'container');

// Create logo anchor
var logoAnchor = document.createElement('a');
logoAnchor.setAttribute('href', '#');
logoAnchor.setAttribute('class', 'logo');

// Create logo image
var logoImg = document.createElement('img');
logoImg.setAttribute('src', 'Innosoft.png');
logoImg.setAttribute('alt', 'Innosoft Logo');

// Append logo image to logo anchor
logoAnchor.appendChild(logoImg);

// Create ul element for navigation links
var navLinksUl = document.createElement('ul');
navLinksUl.setAttribute('class', 'nav-links');

// Create list items for navigation links
var navLinkItems = [];
var navLinkTexts = ["Home", "Services", "About", "Contact"];

for (var i = 0; i < navLinkTexts.length; i++) {
    var navLinkItem = document.createElement('li');
    var navLink = document.createElement('a');
    navLink.setAttribute('href', '#' + navLinkTexts[i].toLowerCase());
    navLink.textContent = navLinkTexts[i];
    navLinkItem.appendChild(navLink);
    navLinkItems.push(navLinkItem);
}

// Append list items to ul element
navLinkItems.forEach(function(item) {
    navLinksUl.appendChild(item);
});

// Create search form
var searchForm = document.createElement('form');
searchForm.setAttribute('class', 'search-form');

// Create search input
var searchInput = document.createElement('input');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', 'Search...');
searchInput.setAttribute('class', 'search-input');

// Create search button
var searchButton = document.createElement('button');
searchButton.setAttribute('type', 'submit');
searchButton.setAttribute('class', 'search-button');

// Create search button icon
var searchIcon = document.createElement('i');
searchIcon.setAttribute('class', 'fas fa-search');

// Append search icon to search button
searchButton.appendChild(searchIcon);

// Append search input and button to search form
searchForm.appendChild(searchInput);
searchForm.appendChild(searchButton);

// Append logo anchor, navigation links ul, and search form to container div
navContainer.appendChild(logoAnchor);
navContainer.appendChild(navLinksUl);
navContainer.appendChild(searchForm);

// Append container div to navbar
nav.appendChild(navContainer);

// Append navbar to body
body.appendChild(nav);


