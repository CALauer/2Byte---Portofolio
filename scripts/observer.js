const target = document.querySelectorAll('.fadeIn');
let callback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear')
        } else {
            return
        }


    });
};

let options = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: .5
}


let observer = new IntersectionObserver(callback, options);
target.forEach(entry => {
    observer.observe(entry);
})

export default observer;