$('.light').on('click', ()=>{
    localStorage.setItem('color',"light");
});
$('.dark').on('click', ()=>{
    localStorage.setItem('color',"dark");
});

function getTheme(){
    let theme = localStorage.getItem('color');
    $('body').addClass(theme);
    $('.main__btn').addClass(theme);
}




let session_data = sessionStorage;
let userData;
$('.registration-form').on("submit", (e)=>{
    e.preventDefault();
    userData = $('#InputName').val() + " " + $('#InputSurname').val();
    session_data.setItem('user', userData);
    window.location.href = "./games.html";
   
});


$('.user-info').html(`hi ${session_data.getItem('user')}`)
$('.logout').on('click', ()=>{
    session_data.clear();
})
let tempExp = 'Wed, 15 Jun 2022 10:50:17 GMT';
$('.set-coockie').on('click', ()=>{
    document.cookie = `user = ${session_data.getItem('user')}; path = /; expires=${tempExp}`;
})

