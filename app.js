const test = `<div><h1>My Education</h1></div>`;
document.body.insertAdjacentHTML('beforebegin', test);


const btn = document.querySelectorAll('.button');

document.addEventListener('click', function (e) {
    if (e.target.closest('.button')) {
        e.target.classList.toggle('active')
    } if (!e.target.closest('.button')) {
        btn.forEach(button => {
            button.classList.remove('active')
        })
    }
})
