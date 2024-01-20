
//we provide video start
const imgclose = document.querySelector('.vidio-block-picture');

imgclose.onclick = function(){
    imgclose.style.display='none';

    const youtubeOpen = document.querySelector('.block2_youtube');
    youtubeOpen.style.display='block';
}
//"we provide video end"

let swiper2 = new Swiper("#logo-swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-logo",
    prevEl: ".swiper-button-prev-logo",
  },
});

//specialities swiper initializing swiper start
const swiper = new Swiper('#swiper-specialities', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//specialities swiper initializing swiper end

//partnersForm start
let formValid = 0;

document.querySelector('.partnersPopUp-button').addEventListener("click", () => {
    

    function UserName(){
        const inputName = document.querySelector('.input-name');
        const regexName = /^[a-zA-Zа-яА-ЯїЇєЄіІґҐ'`'']{2}[a-zA-Zа-яА-ЯїЇєЄіІґҐ\s'`''-]*$/;

        if (inputName.value.trim() == "") {
            inputName.classList.add("eror");
            inputName.closest(".userNameBlock").querySelector(".input-name-text").textContent ="Поле не заповнене";
        }
        else if (!regexName.test(inputName.value)) {
            inputName.closest(".userNameBlock").querySelector(".input-name-text").innerHTML ="Поле має містити не менше двох символів";
            inputName.closest(".userNameBlock").querySelector("input").classList.add("eror");
        }
        else{
            inputName.classList.remove("eror")
            inputName.closest(".userNameBlock").querySelector("input").classList.add("successful-validation");
            inputName.closest(".userNameBlock").querySelector(".input-name-text").innerHTML="";
        } 
        return regexName.test(inputName.value);
    };
    


    function UserEmail(){
        const inputEmail = document.querySelector('.input-email');
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (inputEmail.value.trim() == "") {
            inputEmail.classList.add("eror");
            inputEmail.closest(".userEmailBlock").querySelector(".input-email-text").textContent ="Поле не заповнене";
        }
        else if (!regexEmail.test(inputEmail.value)) {
            inputEmail.closest(".userEmailBlock").querySelector(".input-email-text").textContent ="Поле заповнено не коректно";
            inputEmail.closest(".userEmailBlock").querySelector("input").classList.add("eror");
        }
        else{
            inputEmail.classList.remove("eror");
            inputEmail.closest(".userEmailBlock").querySelector(".input-email-text").innerHTML="";
            inputEmail.closest(".userEmailBlock").querySelector("input").classList.add("successful-validation");
        }
        return regexEmail.test(inputEmail.value);
    };

    function UserSurname(){
        const inputUserSurname = document.querySelector('.input-surname');
        const regexUserSurname = /^[a-zA-Zа-яА-ЯїЇєЄіІґҐ'`'']{2}[a-zA-Zа-яА-ЯїЇєЄіІґҐ\s'`''-]*$/;

        if (inputUserSurname.value.trim() == "") {
            inputUserSurname.classList.add("eror");
            inputUserSurname.closest(".userSurnameBlock").querySelector(".input-surname-text").textContent ="Поле не заповнене";
        }
        else if (!regexUserSurname.test(inputUserSurname.value)) {
            inputUserSurname.closest(".userSurnameBlock").querySelector(".input-surname-text").textContent ="Поле має містити не менше двох символів";
            inputUserSurname.closest(".userSurnameBlock").querySelector("input").classList.add("eror");
        }
        else{
            inputUserSurname.classList.remove("eror")
            inputUserSurname.closest(".userSurnameBlock").querySelector("input").classList.add("successful-validation");
            inputUserSurname.closest(".userSurnameBlock").querySelector(".input-surname-text").innerHTML="";
        }
        return regexUserSurname.test(inputUserSurname.value); 
    };

    function UserMobilePhone(){
        const inputUserMobilePhone = document.querySelector('.input-MobilePhone');
        const regexUserMobilePhone = /^\+38 \(0\d{2}\) \d{3}-\d{2}-\d{2}$/;

        if (inputUserMobilePhone.value.trim() == "") {
            inputUserMobilePhone.classList.add("eror");
            inputUserMobilePhone.closest(".userMobilePhoneBlock").querySelector(".input-MobilePhone-text").textContent ="Поле не заповнене";
        }
        else if (!regexUserMobilePhone.test(inputUserMobilePhone.value)) {
            inputUserMobilePhone.closest(".userMobilePhoneBlock").querySelector(".input-MobilePhone-text").textContent ="Поле заповнено не коректно";
            inputUserMobilePhone.closest(".userMobilePhoneBlock").querySelector("input").classList.add("eror");
        }
        else{
            inputUserMobilePhone.classList.remove("eror");
            inputUserMobilePhone.closest(".userMobilePhoneBlock").querySelector(".input-MobilePhone-text").textContent='';
            inputUserMobilePhone.closest(".userMobilePhoneBlock").querySelector("input").classList.add("successful-validation");
        } 
        return regexUserMobilePhone.test(inputUserMobilePhone.value);
    };


    UserName();
    UserEmail();
    UserSurname();
    UserMobilePhone();
});




function updatePlaceholderText(){
    const placeholderContry = document.querySelector('.input-country');
    const placeholderFound = document.querySelector('.input-user-found-out');
    const placeholderFooperation = document.querySelector('.input-user-cooperation');

    if(window.innerWidth>768){
        placeholderContry.placeholder = 'В якому місті чи країні бажаєте представляти інтереси проєкту?';
        placeholderFound.placeholder = 'Звідки отримали інформацію про нас?';
        placeholderFooperation.placeholder = 'Яка співпраця цікавить Вас?';
    }
    else{
        placeholderContry.placeholder = '';
        placeholderFound.placeholder = '';
        placeholderFooperation.placeholder = '';
    }
};

updatePlaceholderText();
window.addEventListener('resize',updatePlaceholderText);
//partnersForm and