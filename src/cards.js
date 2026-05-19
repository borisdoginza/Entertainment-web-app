export function createTrendingCart(item) {
    return `
        <div style="background-image: url('${item.thumbnail.trending.small}'); background-image: url('${item.thumbnail.trending.large}');" class="
        bg-linear-to-t from-black/30 to-transparent
        shrink-0 bg-cover bg-center w-60 h-35 md:w-117 md:h-58 rounded-lg z-1 relative">
            
            <div class="relative group/play bg-linear-to-t from-black/50 to-transparent z-9999 rounded-lg w-60 h-35 md:w-117 md:h-58 hover:bg-[rgba(16,20,30,0.5)] transition-color duration-0">

            <button class="transition-all duration-100 opacity-0 group-hover/play:opacity-100 absolute flex flex-row gap-0.5 justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(255,255,255,0.2)] w-16 h-7 md:w-20 md:h-10 rounded-full">
                <img src="assets/icon-play.svg" alt="Play" class="w-4 h-4 md:w-7 md:h-7">
                <span class="text-white text-sm ml-2">Play</span>
            </button>
            
            <button onclick="toggleBookmark('${item.title}')" class=" ${item.isBookmarked ? 'bg-white': 'bg-[rgba(16,20,30,0.5)]'} appearance-none p-0 cursor-pointer border-none group w-8 h-8 rounded-full bg-[rgba(16,20,30,0.5)] relative top-2 left-50 md:left-106 hover:bg-white">
            <svg viewBox="0 0 20 20" class="${item.isBookmarked ? 'text-black': 'text-white'} group-hover:text-black absolute top-2 left-2.5 w-4.75 h-5.5 rotate-2 transition-all duration-100" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
            </button>
            <div class="mt-7 md:mt-30 p-4 flex flex-col gap-0">
                <div class="flex flex-row gap-2 pb-0">
                    <span class="text-gray-400 text-sm">${item.year}</span>
                    <span class="text-gray-400 text-sm">•</span>
                    <img src="
                    ${item.category.includes("Movie")
                        ? 'assets/icon-category-movie.svg'
                        : 'assets/icon-category-tv.svg'
                    }" class="w-3 h-3 translate-y-1">
                    <span class="text-gray-400 text-sm">${item.category}</span>
                    <span class="text-gray-400 text-sm">•</span>
                    <span class="text-gray-400 text-sm">${item.rating}</span>
                </div>
                <span class="text-white text-md">${item.title}</span>
            </div>

            </div>

        </div>
    `
}

export function createCards(item) {
    return `
    <div class="flex flex-col gap-2 mb-2.5">
<div class="relative group/play z-11 rounded-lg w-full transition-all duration-100">

                <img src="${item.thumbnail.regular.large}" alt="${item.title}" class="w-full h-full object-cover rounded-lg z-1 relative">
                <div class="absolute inset-0 bg-[rgba(16,20,30,0.5)] opacity-0 group-hover/play:opacity-100 transition-all duration-100 rounded-lg z-5"></div>
                
                <button class="z-10 transition-all md:w-20 md:h-10 duration-100 opacity-0 group-hover/play:opacity-100 absolute flex flex-row gap-0 justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(255,255,255,0.2)] w-16 h-7 rounded-full">
                    <img src="assets/icon-play.svg" alt="Play" class="w-4 h-4 md:w-7 md:h-7">
                    <span class="text-white text-sm ml-2">Play</span>
                </button>
                
                <button onclick="toggleBookmark('${item.title}')" class="${item.isBookmarked ? 'bg-white': 'bg-[rgba(16,20,30,0.5)]'} appearance-none p-0 cursor-pointer border-none group w-8 h-8 transition-all duration-100 rounded-full absolute top-2 right-2 z-6 hover:bg-white">
                
                <svg viewBox="0 0 20 20" class=" ${item.isBookmarked ? 'text-black': 'text-white'}
                group-hover:text-black absolute top-2 left-2.5 w-4.75 h-5.5 rotate-2 transition-all duration-100" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg></button>
            </div>
        
        <div class="flex flex-row gap-2">
                    <span class="text-gray-400 text-xs">${item.year}</span>
                    <span class="text-gray-400 text-xs">•</span>
                    <img src="
                    ${item.category.includes("Movie")
                        ? 'assets/icon-category-movie.svg'
                        : 'assets/icon-category-tv.svg'
                    }" class="w-3 h-3 translate-y-0.5">
                    <span class="text-gray-400 text-xs">${item.category}</span>
                    <span class="text-gray-400 text-xs">•</span>
                    <span class="text-gray-400 text-xs">${item.rating}</span>
                </div>
        <span class="text-white text-sm -translate-y-1.5">${item.title}</span>

    </div>
    `
}