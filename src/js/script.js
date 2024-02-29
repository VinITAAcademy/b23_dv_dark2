
//we provide video start
const imgclose = document.querySelector('.vidio-block-picture');

imgclose.onclick = function(){
    imgclose.style.display='none';

    const youtubeOpen = document.querySelector('.block2_youtube');
    youtubeOpen.style.display='block';
    let iframe = document.querySelector('.iframe-video');
    iframe.src ="https://www.youtube.com/embed/pmrIlYBWP20?autoplay=1";
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
const scrollUp = $(".scroll-up");
const offset = 100;
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

if (scrollUp.length) {

    scrollUp.removeClass("scroll-up-active");

    window.addEventListener("scroll", () => {
        if (getTop() > offset) {
            scrollUp.addClass("scroll-up-active");
        } else {
            scrollUp.removeClass("scroll-up-active");
        }
    });

    scrollUp.on("click", (event) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
//AllForm valid check start

//checbox start
document.querySelectorAll(".cchl").forEach((element) => {
    element.addEventListener("click", orderFunction);
});

function orderFunction() {
    let checkboxes = document.querySelectorAll(".cchl");
    let checkedCount = 0;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    if (checkedCount > 2) {
        this.checked = false; // We prohibit selection of the current checkbox if two others are already selected 
    }
}
//checbox end

function checkInput(input){
    if(input.value.trim() == ""){
        input.previousElementSibling.style.display = "block";
    }
    else{
        input.previousElementSibling.style.display = "none";
    }
};

//placeholder english resize start
updatePlaceholderTextEnglish();
window.addEventListener('resize',updatePlaceholderTextEnglish);
function updatePlaceholderTextEnglish(){
    const placeholderContry = document.querySelectorAll('.input-country-en');
    const placeholderFound = document.querySelectorAll('.input-user-found-out-en');
    const placeholderFooperation = document.querySelectorAll('.input-user-cooperation-en');
    if(innerWidth>768){
        placeholderContry.forEach(el=>{
            el.placeholder="Which city or country do you want to represent the interests of the project?";
        });
        placeholderFound.forEach(el=>{
            el.placeholder="Where did you get information about us?";
        });
        placeholderFooperation.forEach(el=>{
            el.placeholder="What cooperation interests you?";
        });
    }else{
        placeholderContry.forEach(el=>{
            el.placeholder="";
        });
        placeholderFound.forEach(el=>{
            el.placeholder="";
        });
        placeholderFooperation.forEach(el=>{
            el.placeholder="";
        });
    }
};

//placeholder english resize end

//placeholder resize start
updatePlaceholderText();
window.addEventListener('resize',updatePlaceholderText);
function updatePlaceholderText(){
    const placeholderContry = document.querySelectorAll('.input-country');
    const placeholderFound = document.querySelectorAll('.input-user-found-out');
    const placeholderFooperation = document.querySelectorAll('.input-user-cooperation');
    if(innerWidth>768){
        placeholderContry.forEach(el=>{
            el.placeholder="В якому місті чи країні бажаєте представляти інтереси проєкту?";
        });
        placeholderFound.forEach(el=>{
            el.placeholder="Звідки отримали інформацію про нас?";
        });
        placeholderFooperation.forEach(el=>{
            el.placeholder="Яка співпраця цікавить Вас?";
        });
    }else{
        placeholderContry.forEach(el=>{
            el.placeholder="";
        });
        placeholderFound.forEach(el=>{
            el.placeholder="";
        });
        placeholderFooperation.forEach(el=>{
            el.placeholder="";
        });
    }
};

//placeholder resize end
let userModal;
let formValid =false;


function checkMentorForm(Button){
    const form = Button.parentNode.parentNode;
    userModal = form.parentNode.parentNode.parentNode;
    const userNameForm = form.querySelector('.input-name');
    const userEmailForm =form.querySelector('.input-email');
    const userSurnameForm =form.querySelector('.input-surname');
    const userMobilePhoneForm =form.querySelector('.input-MobilePhone');

    checkYourForm(userNameForm,userEmailForm,userSurnameForm,userMobilePhoneForm);
}

function checkYourForm(userNameForm,userEmailForm,userSurnameForm,userMobilePhoneForm){
    function UserName(){
        const inputName = userNameForm;
        const regexName = /^[a-zA-Zа-яА-ЯїЇєЄіІґҐ'`'']{2}[a-zA-Zа-яА-ЯїЇєЄіІґҐ\s'`''-]*$/;
            if (inputName.value.trim() == "") {
                inputName.classList.remove("successful-validation");
                inputName.classList.add("eror");
                inputName.closest(".userNameBlock").querySelector(".input-name-text").textContent ="Поле не заповнене";
            }
            else if (!regexName.test(inputName.value)) {
                inputName.classList.remove("successful-validation");
                inputName.closest(".userNameBlock").querySelector(".input-name-text").innerHTML ="Поле має містити не менше двох символів";
                inputName.classList.add("eror");

            }
            else{
                inputName.classList.remove("eror")
                inputName.classList.add("successful-validation");
                inputName.closest(".userNameBlock").querySelector(".input-name-text").innerHTML="";
            } 
            return regexName.test(inputName.value); 
    };
    
    function UserEmail(){
        const inputEmail = userEmailForm;
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (inputEmail.value.trim() == "") {
            inputEmail.classList.remove("successful-validation");
            inputEmail.classList.add("eror");
            inputEmail.closest(".userEmailBlock").querySelector(".input-email-text").textContent ="Поле не заповнене";
        }
        else if (!regexEmail.test(inputEmail.value)) {
            inputEmail.classList.remove("successful-validation");
            inputEmail.closest(".userEmailBlock").querySelector(".input-email-text").textContent ="Поле заповнено не коректно";
            inputEmail.classList.add("eror");
        }
        else{
            inputEmail.classList.remove("eror");
            inputEmail.closest(".userEmailBlock").querySelector(".input-email-text").innerHTML="";
            inputEmail.classList.add("successful-validation");
        }
        return regexEmail.test(inputEmail.value);
    };

    function UserSurname(){
        const inputUserSurname = userSurnameForm;
        const regexUserSurname = /^[a-zA-Zа-яА-ЯїЇєЄіІґҐ'`'']{2}[a-zA-Zа-яА-ЯїЇєЄіІґҐ\s'`''-]*$/;

        if (inputUserSurname.value.trim() == "") {
            inputUserSurname.classList.remove("successful-validation");
            inputUserSurname.classList.add("eror");
            inputUserSurname.closest(".userSurnameBlock").querySelector(".input-surname-text").textContent ="Поле не заповнене";
        }
        else if (!regexUserSurname.test(inputUserSurname.value)) {
            inputUserSurname.classList.remove("successful-validation");
            inputUserSurname.closest(".userSurnameBlock").querySelector(".input-surname-text").textContent ="Поле має містити не менше двох символів";
            inputUserSurname.classList.add("eror");
        }
        else{
            inputUserSurname.classList.remove("eror")
            inputUserSurname.classList.add("successful-validation");
            inputUserSurname.closest(".userSurnameBlock").querySelector(".input-surname-text").innerHTML="";
        }
        return regexUserSurname.test(inputUserSurname.value); 
    };

    function UserMobilePhone(){
        const inputUserMobilePhone = userMobilePhoneForm;
        const regexUserMobilePhone = /^\+380\d{9}$/;

        if (inputUserMobilePhone.value.trim() == "") {
            inputUserMobilePhone.classList.remove("successful-validation");
            inputUserMobilePhone.classList.add("eror");
            inputUserMobilePhone.closest(".userMobilePhoneBlock").querySelector(".input-MobilePhone-text").textContent ="Поле не заповнене";
        }
        else if (!regexUserMobilePhone.test(inputUserMobilePhone.value)) {
            inputUserMobilePhone.classList.remove("successful-validation");
            inputUserMobilePhone.closest(".userMobilePhoneBlock").querySelector(".input-MobilePhone-text").textContent ="Поле заповнено не коректно";
            inputUserMobilePhone.classList.add("eror");
        }
        else{
            inputUserMobilePhone.classList.remove("eror");
            inputUserMobilePhone.closest(".userMobilePhoneBlock").querySelector(".input-MobilePhone-text").textContent='';
            inputUserMobilePhone.classList.add("successful-validation");
        } 
        return regexUserMobilePhone.test(inputUserMobilePhone.value);
    };

    UserName();
    UserEmail();
    UserSurname();
    UserMobilePhone();
    if( UserName(),UserEmail(),UserSurname(),UserMobilePhone()){
        formValid=true;
            userModal.querySelector('.close-modal-btn').click();
        
    }
    else{
        formValid=false;
    }
}
//AllForm valid check end

const forms = document.querySelector(".forms");
const lang = document.documentElement.lang;
listenSubmit();
function listenSubmit() {
    document.querySelectorAll(".check-form").forEach((elem) =>
        elem.addEventListener("click", (event) => {
            event.preventDefault();
            // submit to the server if the form is valid
            if (formValid) {
                grecaptcha.ready(function () {
                grecaptcha.execute(
                    "6LcwRRUaAAAAADavxcmw5ShOEUt1xMBmRAcPf6QP",
                    { action: "submit" }
                    ).then(function (token) {
                        if (formValid) {
                            const actionUrl =
                                "https://intita.com/api/v1/entrant";
                            const entrantFormData = new FormData(
                                forms
                            );
                            entrantFormData.append(
                                "g-recaptcha-response",
                                token
                            );
                            const http = new XMLHttpRequest();
                            http.open("POST", actionUrl, true);
                            http.send(entrantFormData);
                            http.onreadystatechange = function () {
                                if (
                                    +http.readyState === 4 &&
                                    +http.status === 201
                                ) {
                                    entrantSubmitResponse();
                                } else if (+http.status === 400) {
                                    switch (lang) {
                                        case "uk":
                                            entrantSubmitResponse(
                                                "Сервер тимчасово перевантажений. Будь ласка, cпробуйте пізніше"
                                            );
                                            break;
                                        case "en":
                                            entrantSubmitResponse(
                                                "The server is temporary busy. Please try again later"
                                            );
                                            break;
                                        default:
                                            break;
                                    }
                                }
                            };
                            http.onload = function () {
                                if (+http.status !== 201) {
                                    switch (lang) {
                                        case "uk":
                                            entrantSubmitResponse(
                                                "Сервер тимчасово перевантажений. Будь ласка, cпробуйте пізніше"
                                            );
                                            break;
                                        case "en":
                                            entrantSubmitResponse(
                                                "The server is temporary busy. Please try again later"
                                            );
                                            break;
                                        default:
                                            break;
                                    }
                                    return;
                                }
                                entrantSubmitResponse();
                            };
                        }
                    });
                });
            }
        })
    );
}

function entrantSubmitResponse(errorStr) {
    const secondWindow = document.getElementById("successfulPopUp");
    if (getComputedStyle(secondWindow, null).display === "none") {
        const elementAnketeText =
            document.querySelector("#successfulTitle");
        if (errorStr) {
            elementAnketeText.innerText = errorStr;
            elementAnketeText.nextElementSibling.style.display="none";
            // document.getElementById("registerModalToggle").style.display ="block";
            document.getElementById("successfulPopUp").style.display =
                "block";
        } else {
            switch (lang) {
                case "uk":
                    elementAnketeText.innerHTML =
                        "Дякую!<br> Я зателефоную Вам найближчим часом!";
                    break;
                case "en":
                    elementAnketeText.innerHTML =
                      "Thank you!<br> I will call you soon!";
                    break;
                default:
                    break;
            }
            document.getElementById("successfulPopUp").style.display = "flex";
        }
        secondWindow.style.display = "block";
    }
}
//close and clean form After Sending Form start
function closeModalsAfterSendingForm(){
    document.getElementById('successfulPopUp').style.display = 'none';
    userModal.querySelectorAll('.input-placeholder').forEach(el =>{
        el.value="";
        el.classList.remove("successful-validation");
        el.previousElementSibling.style.display='block';
    })
}
//close and clean form After Sending Form end


//form cleaning After click on close button start
function cleanForm(button){
    let parent=button.parentNode;
    parent.querySelectorAll('.input-placeholder').forEach(el =>{
        el.value='';
        el.classList.remove("successful-validation");
        el.classList.remove("eror");
        el.previousElementSibling.style.display='block';
        el.nextElementSibling.innerHTML='';
    })
}
//form cleaning After click on close button end
