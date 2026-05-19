import { createTrendingCart, createCards } from './cards.js';
import { media, searchQuery, currentPage } from './state.js';

export function renderTrending() {
    const trendingContainer = document.getElementById('trending');
    trendingContainer.innerHTML = getTrending().map(item => createTrendingCart(item)).join('');
}

export function renderRecommended(){
    const recommendedContainer = document.getElementById('recommended');
    recommendedContainer.innerHTML = getRecommended().map(item => createCards(item)).join('');

}

export function renderMovies(){
    const moviesContainer = document.getElementById('movies_container');
    moviesContainer.innerHTML = getMovies().map(item => createCards(item)).join('');

}

export function renderTVseries(){
    const tvseriesContainer = document.getElementById('tv-series_container');
    tvseriesContainer.innerHTML = getTVseries().map(item => createCards(item)).join('');
    
}

export function renderBookmarked(){
    const booksmarkedMovieContainer = document.getElementById('bookmarked_movies_container');
    const booksmarkedTVseriesContainer = document.getElementById('bookmarked_tv-series_container');
    let bookmarkedMedia = media.filter(item => item.isBookmarked && item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    let bookmarkedMovies = bookmarkedMedia.filter(item => item.category.includes('Movie'));
    let bookmarkedTVseries = bookmarkedMedia.filter(item => item.category.includes('TV Series'));

    booksmarkedMovieContainer.innerHTML = bookmarkedMovies.map(item => createCards(item)).join('');
    booksmarkedTVseriesContainer.innerHTML = bookmarkedTVseries.map(item => createCards(item)).join('');
}

export function renderMedia(){
    const searchOutput = document.getElementById('search_output');
    switch(currentPage){
        case 'home':
            searchOutput.innerHTML = getMedia().map(item => createCards(item)).join('');
            break;
        case 'movies':
            searchOutput.innerHTML = getMovies().map(item => createCards(item)).join('');
            break;
        case 'tv-series':
            searchOutput.innerHTML = getTVseries().map(item => createCards(item)).join('');
            break;
        case 'bookmarked':
            let bookmarkedMedia = media.filter(item => item.isBookmarked && item.title.toLowerCase().includes(searchQuery.toLowerCase()));
            let bookmarkedMovies = bookmarkedMedia.filter(item => item.category.includes('Movie'));
            let bookmarkedTVseries = bookmarkedMedia.filter(item => item.category.includes('TV Series'));
            const booksmarkedMovieContainer = document.getElementById('bookmarked_movies_container');
            const booksmarkedTVseriesContainer = document.getElementById('bookmarked_tv-series_container');

            booksmarkedMovieContainer.innerHTML = bookmarkedMovies.map(item => createCards(item)).join('');
            booksmarkedTVseriesContainer.innerHTML = bookmarkedTVseries.map(item => createCards(item)).join('');
            break;
    }
}

export function renderBookmarkedTitles(){
    const noBookmarked = document.getElementById('no-bookmarked');
    const bookmarkedMoviesTitle = document.getElementById('bookmarked-movies');
    const bookmarkedSeriesTitle = document.getElementById('bookmarked-series');
    
    const bookmarkedMedia = media.filter(item => item.isBookmarked && item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    const bookmarkedMovies = bookmarkedMedia.filter(item => item.category.includes('Movie'));
    const bookmarkedTVseries = bookmarkedMedia.filter(item => item.category.includes('TV Series'));
    const hasAnyBookmarked = media.some(item => item.isBookmarked);

    if (!hasAnyBookmarked) {
        noBookmarked.style.display = 'block';
        bookmarkedMoviesTitle.style.display = 'none';
        bookmarkedSeriesTitle.style.display = 'none';
    } else {
        noBookmarked.style.display = 'none';
        bookmarkedMoviesTitle.style.display = bookmarkedMovies.length > 0 ? 'block' : 'none';
        bookmarkedSeriesTitle.style.display = bookmarkedTVseries.length > 0 ? 'block' : 'none';
    }
}

export function getTrending(){
    return media.filter(i => i.isTrending)
}

export function getRecommended(){ 
    return media.filter(item => !item.isTrending)
}

export function getMovies(){
    return media.filter(item =>item.category.includes('Movie') && item.title.toLowerCase().includes(searchQuery.toLowerCase()));
}

export function getTVseries(){
    return media.filter(item =>item.category.includes('TV Series') && item.title.toLowerCase().includes(searchQuery.toLowerCase()));
}

export function getMedia(){
    return media.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
}
