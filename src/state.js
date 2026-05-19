export let media = [];
export let searchQuery = '';
export let currentPage = 'home';

export function setMedia(m) {
    media = m;
}

export function setSearchQuery(q) {
    searchQuery = q;
}

export function setCurrentPage(p) {
    currentPage = p;
}
