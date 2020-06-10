const editPopup = document.querySelector('.popup'); 
const editForm = document.querySelector('.popup__form');
const editButton = document.querySelector('.profile__button-edit');
const saveButton = editPopup.querySelector('.popup__button');


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
    
  });
}

//Функция обновления данных пользователя

function userUpdate(name, info) {
  document.querySelector('.profile__name').textContent = name;
  document.querySelector('.profile__profession').textContent = info;
}
//Функция коллбэк для формы редактирования профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  const name = editPopup.querySelector('input[name=username]').value;
  const userInfo= editPopup.querySelector('input[name=userinfo]').value;
  userUpdate(name, userInfo);
  changePopupState(editPopup);
}
function formSubmit (form, callBack) {
  form.addEventListener('submit', callBack);
}


formSubmit(editForm, formSubmitHandler);
closePopup(editPopup);
openPopup(editPopup, editButton);
