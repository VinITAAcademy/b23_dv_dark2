
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

//AllForm valid check start
function chengeRealCheckbox(checkboxId){

    let customCheckbox = document.getElementById(checkboxId);
    let realCheckbox= customCheckbox.previousSibling;

    realCheckbox.checked = !realCheckbox.checked;
    console.log(realCheckbox.checked);
    if(realCheckbox.checked){
        customCheckbox.classList.add('custom-checkbox-active');
    }
    else{
        customCheckbox.classList.remove('custom-checkbox-active');
    }

}

let formValid =false;
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
        const regexUserMobilePhone = /^\+380\d{9}$/;

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
    if( UserName(),UserEmail(),UserSurname(),UserMobilePhone()){
        formValid=true;
    }
    else{
        formValid=false;
    }
});

//AllForm valid check end

//placeholder text depends on screen start
function updatePlaceholderText(){
    const placeholderContry = document.querySelectorAll('.input-country');
    const placeholderFound = document.querySelectorAll('.input-user-found-out');
    const placeholderFooperation = document.querySelectorAll('.input-user-cooperation');
    console.log(placeholderContry)

    if(window.innerWidth>768){
        placeholderContry.forEach(el=>{
            el.placeholder = 'В якому місті чи країні бажаєте представляти інтереси проєкту?';
        });
        placeholderFound.forEach(el=>{
            el.placeholder = 'Звідки отримали інформацію про нас?';

        });
        placeholderFooperation.forEach(el=>{
            el.placeholder = 'Яка співпраця цікавить Вас?';

        });
    }
    else{
        placeholderContry.placeholder = '';
        placeholderFound.placeholder = '';
        placeholderFooperation.placeholder = '';
    }
};

updatePlaceholderText();
window.addEventListener('resize',updatePlaceholderText);
//placeholder text depends on screen end

// reCAPTCHA start
const forms = document.querySelector(".forms");
const lang = document.documentElement.lang;

let checkForm
listenSubmit();
function listenSubmit() {
    
    document.querySelectorAll(".check-form").forEach((elem) =>
        elem.addEventListener("click", (event) => {
            event.preventDefault();
            // submit to the server if the form is valid
            if (formValid) {
                console.log(formValid);
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
    const secondWindow = document.getElementById("SuccessfulRequestPopUp");
    if (getComputedStyle(secondWindow, null).display === "none") {
        const elementAnketeText =
            document.querySelector("#responseMessage");
        if (errorStr) {
            elementAnketeText.innerText = errorStr;
            document.getElementById("partnersModalWindow").style.display ="block";
            document.getElementById("SuccessfulRequestPopUp").style.display =
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
            document.getElementById("responseModal").style.display = "flex";
        }
        secondWindow.style.display = "block";
        document.getElementById("partnersModalWindow").style.display = "none";
        document.getElementById("SuccessfulRequestPopUp").style.display = "block";
    }
}
// reCAPTCHA end
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

//close SuccessfulRequest modal-window start
document.getElementById("close-second-window").addEventListener("click", () => {
    document.getElementById("SuccessfulRequestPopUp").style.display = "none";
    //document.getElementById("registerModalToggle").style.display = "none";
});
//close SuccessfulRequest modal-window end
