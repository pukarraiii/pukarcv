const hideDivs = document.querySelectorAll('.hide_div');

hideDivs.forEach(div => {
    const noneLink = div.querySelector('a[href="none"]');
    
    if (noneLink) {
        div.style.display = 'none';
    } else {
        div.style.display = 'block'; // Show the div
    }
});