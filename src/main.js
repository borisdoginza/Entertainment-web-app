import './reset.css'
import './style.css'

import { createTrendingCart, createCards } from './cards.js';
import { renderTrending, renderRecommended, renderMovies, renderTVseries, renderBookmarked, renderBookmarkedTitles, getTrending, getRecommended, getMovies, getMedia, getTVseries, renderMedia } from './render.js';
import { media, searchQuery, currentPage, setMedia, setSearchQuery, setCurrentPage } from './state.js';


async function loadMedia(){
    const response = await fetch('/data.json');
    setMedia(await response.json());
    renderTrending();
    renderRecommended();
    renderMovies();
    renderTVseries();
}

window.toggleBookmark = function(title){
    const item = media.find(item => item.title === title);
    if (!item) return;
    item.isBookmarked = !item.isBookmarked;
    renderTrending();
    renderRecommended();
    renderMovies();
    renderTVseries();
    renderBookmarked();
    renderBookmarkedTitles();
    renderMedia();
}

loadMedia();




// ---
// Nav button control 
// ---

const logoHomeButton = document.getElementById('logo_home_button');

const homeButton = document.getElementById('home_button');
const moviesButton = document.getElementById('movies_button');
const tvseriesButton = document.getElementById('tv-series_button');
const bookmarkedButton = document.getElementById('bookmarked_button');

const homeSection = document.getElementById('home');
const moviesSection = document.getElementById('movies');
const tvseriesSection = document.getElementById('tv-series');
const bookmarkedSection = document.getElementById('bookmarked');

const homeButton_svg = document.getElementById('home_button_svg');
const moviesButton_svg = document.getElementById('movies_button_svg');
const tvseriesButton_svg = document.getElementById('tv-series_button_svg');
const bookmarkedButton_svg = document.getElementById('bookmarked_button_svg');

logoHomeButton.addEventListener('click', () => {
    home()
    })

homeButton.addEventListener('click', () => {
    home()
    })

function home(){
    searchContainer.style.display = 'none';
    searchOutput.style.display = 'none';
    setCurrentPage('home');
    searchInput.value = '';
    setSearchQuery('');

    homeSection.style.display = 'block';
    moviesSection.style.display = 'none';
    tvseriesSection.style.display = 'none';
    bookmarkedSection.style.display = 'none';

    trendingTitle.style.display = 'block';
    recommendedTitle.style.display = 'block';
    document.getElementById('recommended').style.display = 'grid';
    document.getElementById('trending').style.display = 'flex';

    homeButton_svg.classList.add('text-white');
    moviesButton_svg.classList.remove('text-white');
    tvseriesButton_svg.classList.remove('text-white');
    bookmarkedButton_svg.classList.remove('text-white');

    searchInput.placeholder = 'Search for movies and TV series';
}

moviesButton.addEventListener('click', () => {
    searchContainer.style.display = 'none';
    searchInput.value = '';
    setSearchQuery('');
    setCurrentPage('movies');

    homeSection.style.display = 'none';
    moviesSection.style.display = 'block';
    tvseriesSection.style.display = 'none';
    bookmarkedSection.style.display = 'none';

    homeButton_svg.classList.remove('text-white');
    moviesButton_svg.classList.add('text-white');
    tvseriesButton_svg.classList.remove('text-white');
    bookmarkedButton_svg.classList.remove('text-white');

    searchInput.placeholder = 'Search for movies';
})

tvseriesButton.addEventListener('click', () => {
    searchContainer.style.display = 'none';
    searchInput.value = '';
    setSearchQuery('');
    setCurrentPage('tv-series');

    homeSection.style.display = 'none';
    moviesSection.style.display = 'none';
    tvseriesSection.style.display = 'block';
    bookmarkedSection.style.display = 'none';

    homeButton_svg.classList.remove('text-white');
    moviesButton_svg.classList.remove('text-white');
    tvseriesButton_svg.classList.add('text-white');
    bookmarkedButton_svg.classList.remove('text-white');

    searchInput.placeholder = 'Search for TV series';
})

const noBookmarked = document.getElementById('no-bookmarked');
const bookmarkedMoviesTitle = document.getElementById('bookmarked-movies');
const bookmarkedSeriesTitle = document.getElementById('bookmarked-series');

bookmarkedButton.addEventListener('click', () => {
    searchContainer.style.display = 'none';
    searchInput.value = '';
    setSearchQuery('');
    setCurrentPage('bookmarked');


    homeSection.style.display = 'none';
    moviesSection.style.display = 'none';
    tvseriesSection.style.display = 'none';
    bookmarkedSection.style.display = 'block';

    homeButton_svg.classList.remove('text-white');
    moviesButton_svg.classList.remove('text-white');
    tvseriesButton_svg.classList.remove('text-white');
    bookmarkedButton_svg.classList.add('text-white');
    let bookmarkedMedia = media.filter(item => item.isBookmarked);
    let bookmarkedMovies = bookmarkedMedia.filter(item => item.category.includes('Movie'));
    let bookmarkedTVseries = bookmarkedMedia.filter(item => item.category.includes('TV Series'));

    renderBookmarked();
    renderBookmarkedTitles();
    searchInput.placeholder = 'Search for bookmarked shows';
})

// ---
// ---
// ---



// ---
// Search
// ---
const searchInput = document.getElementById('search_input');
const searchQty = document.getElementById('search_qty');

const searchTitle = document.getElementById('search_title');
const searchContainer = document.getElementById('search_container');

const trendingTitle = document.getElementById('trending-title');
const recommendedTitle = document.getElementById('recommended-title');

const searchOutput = document.getElementById('search_output');

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
    searchTitle.textContent = searchQuery;

    if (searchQuery.length > 0){
        searchOutput.style.display = currentPage === 'bookmarked' ? 'none' : 'grid';
        searchContainer.style.display = 'block';
        switch(currentPage){
        case 'home':
            trendingTitle.style.display = 'none';
            recommendedTitle.style.display = 'none';
            document.getElementById('recommended').style.display = 'none';
            document.getElementById('trending').style.display = 'none';
            break;
        case 'movies':
            moviesSection.style.display = 'none';
            
            break;
        case 'tv-series':
            tvseriesSection.style.display = 'none';
            
            break;
        case 'bookmarked':
            moviesSection.style.display = 'none';
            tvseriesSection.style.display = 'none';
            searchOutput.style.display = 'none';
            break;
    }
        

    } else {
        searchQty.textContent = 'no';
        trendingTitle.style.display = 'block';
        recommendedTitle.style.display = 'block';
        document.getElementById('recommended').style.display = 'grid';
        document.getElementById('trending').style.display = 'flex';

        moviesSection.style.display = 'block';
        tvseriesSection.style.display = 'block';

        searchContainer.style.display = 'none';
            switch(currentPage){
                case 'home':
                    homeSection.style.display = 'block';
                    moviesSection.style.display = 'none';
                    tvseriesSection.style.display = 'none';
                    bookmarkedSection.style.display = 'none';
                    renderTrending();
                    renderRecommended();
                    break;
                case 'movies':
                    homeSection.style.display = 'none';
                    moviesSection.style.display = 'block';
                    tvseriesSection.style.display = 'none';
                    bookmarkedSection.style.display = 'none';
                    renderMovies();
                    break;
                case 'tv-series':
                    homeSection.style.display = 'none';
                    moviesSection.style.display = 'none';
                    tvseriesSection.style.display = 'block';
                    bookmarkedSection.style.display = 'none';
                    renderTVseries();
                    break;
                case 'bookmarked':
                    searchOutput.style.display = 'none';
                    moviesSection.style.display = 'none';
                    tvseriesSection.style.display = 'none';
                    renderBookmarked();
                    renderBookmarkedTitles();
                    break;
    }}

    renderMedia();
    if (currentPage === 'bookmarked') {
        renderBookmarkedTitles();
    }
})

// const booksmarkedMovieContainer = document.getElementById('bookmarked_movies_container');
// const booksmarkedTVseriesContainer = document.getElementById('bookmarked_tv-series_container');


// Trending container horizontal scroll with mouse wheel
const trendingContainer = document.getElementById('trending');
trendingContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    trendingContainer.scrollLeft += e.deltaY;
})