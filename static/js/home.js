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
    }, 450);
    setTimeout(() => {
        document.getElementById('coverParagraph').classList.add('active');
    }, 450);
    setTimeout(() => {
        document.getElementById('border').classList.add('active');
    }, 450);
    setTimeout(() => {
        document.getElementById('desCoverCTAS').classList.add('active');
    }, 450);
    setTimeout(() => {
        document.getElementById('mobCoverCTAS').classList.add('active');
    }, 450);
}





