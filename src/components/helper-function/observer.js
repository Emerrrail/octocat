const observer = (bottomReachedCallback, observed) => {

    const options = {
        root: null,
        rootMargin: '20px',
        threshold: 0
    }
    const intersectionObserver = new IntersectionObserver(bottomReachedCallback, options);

    return intersectionObserver.observe(observed);
}

export default observer;