
let session_data = sessionStorage
let userData;
$('.registration-form').on("submit", ()=>{
    userData = $('#InputName').val() + " " + $('#InputSurname').val();
    session_data.setItem('user', userData);
    window.location.href = "./games.html";
    $('.user-info').html(session_data.getItem('key'))
    
});


$('.logout').on('click', ()=>{
    session_data.clear();

})