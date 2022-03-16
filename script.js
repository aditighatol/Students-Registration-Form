let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
let userWebsite = document.getElementById('userWebsite');
let userImg = document.getElementById('userImg');
let userDomain = document.getElementById('userDomain');
let genderSelector = document.getElementById('genderSelector');
let enroll = document.querySelector('.submit');
let clear = document.querySelector('.clear');

enroll.onclick = () => {

    if (userName.value == '' || userEmail.value == '' || userWebsite.value == '' || userImg.value == '' || userDomain.value == '' || genderSelector.value == 'select') {
        alert('Kindly fill all the required fields and select your gender to be enrolled');
        return;
    } else {

        var myData =
            '<div class="myDetail">' +
            '<div class="imgContainer">' +
            '<img src=' + userImg.value + ' alt="Image Unavailable" class="userPic">' +
            '</div>' +
            '<div class="infoContainer">' +
            '<p class="uName">' + userName.value + '</p>' +
            '<p class="uGender">' + genderSelector.value + '</p>' +
            '<p class="uEmail">' + userEmail.value + '</p>' +
            '<p class="uWebsite"><a href='+ userWebsite.value +' target="_blank">' + userWebsite.value + '</a></p>' +
            '<p class="uDomain">' + userDomain.value + '</p>' +
            '</div>' +
            '</div>';
    }

    document.querySelector('.detailsContainer').innerHTML += myData;
    userName.value = '';
    userEmail.value = '';
    userWebsite.value = '';
    userImg.value = '';
    userDomain.value = '';
    genderSelector.value = "select";
}

clear.onclick = () => {
    userName.value = '';
    userEmail.value = '';
    userWebsite.value = '';
    userImg.value = '';
    userDomain.value = '';
    genderSelector.value = "select";
}