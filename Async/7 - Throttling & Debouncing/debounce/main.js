function getSearchResult(searchTerm) {
    console.log("get search results called")
    return new Promise((resove) => {
        setTimeout(() => {
            resove({})
        }, 2000);
    })
}

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        console.log("debounced")
        clearTimeout(timer);
        timer = setTimeout(() => {
            console.log("call allowed")
            fn.apply(this, args)
        }, delay);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.querySelector("#search");


    inputElement.addEventListener("input", debounce(event => {
        console.log(event.key, event.target.value)
        getSearchResult().then(() => {
            console.log("results came")
        })
    }, 800))
})