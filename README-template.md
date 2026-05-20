# Frontend Mentor - Entertainment web app solution

This is a solution to the [Entertainment web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X). Frontend Mentor challenges help you improve your coding skills by building realistic project.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate between Home, Movies, TV Series, and Bookmarked Shows pages
- Add/Remove bookmarks from all movies and TV series
- Search for relevant shows on all pages


### Links

- Solution URL: https://github.com/borisdoginza/Entertainment-web-app
- Live Site URL: https://entertainment-web-app-2vqq.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- Tailwind CSS
- Vite

### What I learned

searchInput.addEventListener('input', (e) => {
    setSearchQuery(e.target.value);
    switch(currentPage){
        case 'home':
            searchQty.textContent = getMedia().length;
            break;
        case 'movies':
            searchQty.textContent = getMovies().length;
            break;
        case 'tv-series':
            searchQty.textContent = getTVseries().length;
            break;
        case 'bookmarked':
            searchQty.textContent = media.filter(item => item.isBookmarked && item.title.toLowerCase().includes(searchQuery.toLowerCase())).length;
            break;
    }
    searchTitle.textContent = searchQuery;)
}

### AI Collaboration

- Debugging by Claude

## Author

- Website - https://entertainment-web-app-2vqq.vercel.app/
- Frontend Mentor - https://www.frontendmentor.io/profile/borisdoginza
