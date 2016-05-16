
  // переменные модального окна
  var v_body = document.querySelector("body");
  var modal_popup = document.querySelector(".modal-popup");
  var btn_contact = document.querySelector(".btn-contact");
  var form_close = modal_popup.querySelector("#write-us-close");

  // переменные формы
  var form = modal_popup.querySelector("form");
  var inp_name = modal_popup.querySelector("[name=name]");
  var inp_email = modal_popup.querySelector("[name=email]");
  var textarea = modal_popup.querySelector("[name=text]");
  var btn_submit = modal_popup.querySelector("[name=submit]");

  // открываем форму
  btn_contact.addEventListener("click", function(event) {
    event.preventDefault(); // отменяем действие ссылки
    v_body.classList.add("blured"); // добавляем фильтры к body
    modal_popup.classList.remove("hidden"); // удаляем класс hidden у модального окна
    inp_name.focus();
      });

  // закрываем форму
  form_close.addEventListener("click", function(event) {
    event.preventDefault(); // отменяем действие ссылки
    v_body.classList.remove("blured"); // удаляем фильтры у body
    modal_popup.classList.add("hidden"); // добавляем класс hidden у модального окна
      });

//карта
  var btn_map = document.querySelector(".map-small");
  var bigmap = document.querySelector(".bigmap");
  var map_close = document.getElementById("map-close")

  // открываем карту
  btn_map.addEventListener("click", function(event) {
    event.preventDefault(); // отменяем действие ссылки
    bigmap.classList.remove("hidden"); // удаляем класс hidden у карты
  });
  map_close.addEventListener("click", function(event) {
    event.preventDefault(); // отменяем действие ссылки
    bigmap.classList.add("hidden"); // добавляем класс hidden у карты
  });

