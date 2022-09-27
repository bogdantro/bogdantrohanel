window.onload = function(){ 

    const loader = document.getElementById('loader');

    setTimeout(() => {
        loader.classList.add('hidden');
    }, 200);

    setTimeout(() => {
        document.getElementById('coverHeading').classList.add('active');
    }, 450);
    setTimeout(() => {
        document.getElementById('coverHeadingSpan').classList.add('active');
    }, 550);
    setTimeout(() => {
        document.getElementById('coverParagraph').classList.add('active');
    }, 650);
    setTimeout(() => {
        document.getElementById('socialIcons').classList.add('active');
    }, 750);
    setTimeout(() => {
        document.getElementById('coverCTAS').classList.add('active');
    }, 950);
    setTimeout(() => {
        document.getElementById('memoji').classList.add('active');
    }, 750);
}





