const editPopup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__button-edit');
const saveButton = editPopup.querySelector('.popup__button');
// editPopup.style.display = "flex";
// console.log(editPopup.style.display);
// editPopup.classList.toggle('.popup_is-opened');
// editPopup.classList.add('popup_is-opened');
console.log(editPopup.querySelector('input[name=username]'));

//Функция заполнения данных popup
function infoPopup(popup) {
  const name = popup.querySelector('input[name=username]');
  const userInfo= popup.querySelector('input[name=userinfo]');
  name.value = document.querySelector('.profile__name').textContent;
  userInfo.value = document.querySelector('.profile__profession').textContent;
}



//Функция изменения видимости popup
function changePopupState(popup) {
  popup.classList.toggle('popup_is-opened');


}
//Функция закрытия popup
function closePopup(popup) {
  popup.addEventListener('click', function (event) {
    if (event.target.classList.contains('popup__close')) {
      changePopupState(popup);
    }
  });
}

//Функция откртытия popup
function openPopup(popup, button) {
  button.addEventListener('click', function () {
    changePopupState(popup);
    infoPopup(popup);
    aaa(saveButton);
    // userUpdate("asadadada", "adafagag");
  });
}

//Функция обновления данных пользователя

function userUpdate(name, info) {
  document.querySelector('.profile__name').textContent = name;
  document.querySelector('.profile__profession').textContent = info;
}


function aaa(button) {
  button.addEventListener('click', function(event){
    // event.preventDefault();
     console.log(event.target);
    if (event.target === saveButton) {
      console.log("1");
      name = document.querySelector('.profile__name').textContent;
     // info = popup.querySelector('input[name=username]').textContent;
      
      userUpdate(name, "1231");
    }
  })

}

// function formSubmitHandler(evt) {
//   evt.preventDefault();

// }


closePopup(editPopup);
openPopup(editPopup, editButton);
