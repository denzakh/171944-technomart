// окно обратного ответа
if ( (document.querySelector(".modal-popup") != null) &&
    (document.querySelector(".btn-contact") != null) &&
    (document.querySelector("#write-us-close") != null) ) {


    // переменные модального окна
    var modal_popup = document.querySelector(".modal-popup");
    var btn_contact = document.querySelector(".btn-contact");
    var form_close = document.querySelector("#write-us-close");

    // переменные формы
    var form = modal_popup.querySelector("form");
    var inp_name = modal_popup.querySelector("[name=name]");
    var inp_email = modal_popup.querySelector("[name=email]");
    var textarea = modal_popup.querySelector("[name=text]");
    var btn_submit = modal_popup.querySelector("[name=submit]");

    // открываем форму
    btn_contact.addEventListener("click", function(event) {
      event.preventDefault(); // отменяем действие ссылки
      modal_popup.classList.remove("hidden"); // удаляем класс hidden у модального окна
      modal_popup.classList.remove("close-popup-animation");
      modal_popup.classList.add("open-popup-animation"); // добавляем анимацию
      inp_name.focus();
        });

    // закрываем форму
    form_close.addEventListener("click", function(event) {
      event.preventDefault(); // отменяем действие ссылки
      modal_popup.classList.remove("open-popup-animation");
      modal_popup.classList.add("close-popup-animation");
      setTimeout( function() {
        modal_popup.classList.add("hidden"); // добавляем класс hidden у модального окна
      }, 999);
        });
}


//карта
if ( (document.querySelector(".map-small") != null) &&
    (document.querySelector(".bigmap") != null) &&
    (document.getElementById("map-close") != null) ) {

    //карта
    var btn_map = document.querySelector(".map-small");
    var bigmap = document.querySelector(".bigmap");
    var map_close = document.getElementById("map-close")

    // открываем карту
    btn_map.addEventListener("click", function(event) {
      event.preventDefault(); // отменяем действие ссылки
      bigmap.classList.remove("hidden"); // удаляем класс hidden у карты
      bigmap.classList.remove("close-popup-animation");
      bigmap.classList.add("open-popup-animation"); // добавляем анимацию
    });

    // закрываем карту
    map_close.addEventListener("click", function(event) {
      event.preventDefault(); // отменяем действие ссылки
      bigmap.classList.remove("open-popup-animation");
      bigmap.classList.add("close-popup-animation");
      setTimeout( function() {
        bigmap.classList.add("hidden"); // добавляем класс hidden у модального окна
      }, 999);
        });
}

// добавление товаров в корзину
if ( (document.querySelector(".add-to-cart-popup") != null) &&
    (document.querySelectorAll(".btn-card-bay") != null) &&
    (document.querySelector(".add-to-cart-close") != null) &&
    (document.querySelector(".continue-shopping-btn") != null) ) {

    // переменные добавления товара
    var cart_popup = document.querySelector(".add-to-cart-popup");
    var btn_bay = document.querySelectorAll(".btn-card-bay");
    var cart_close1 = document.querySelector(".add-to-cart-close");
    var cart_close2 = document.querySelector(".continue-shopping-btn");

    // открываем добавление товара
    var i;
    var cartCount = 0;
    for (i = 0; i < btn_bay.length; i++) {  //перебираем массив
      btn_bay[i].addEventListener("click", function(event) { // у каждого элемента массива
        event.preventDefault(); // отменяем действие ссылки
        cart_popup.classList.remove("hidden"); // удаляем класс hidden у модального окна
        cart_popup.classList.remove("close-popup-animation2");
        cart_popup.classList.add("open-popup-animation2"); // добавляем анимацию

        cartCount++;
      });
    }

    // закрываем добавление товара
    cart_close1.addEventListener("click", function(event) {
      event.preventDefault(); // отменяем действие ссылки
      cart_popup.classList.remove("open-popup-animation2");
      cart_popup.classList.add("close-popup-animation2");
      setTimeout( function() {
        cart_popup.classList.add("hidden"); // добавляем класс hidden у модального окна
      }, 500);
        });

    cart_close2.addEventListener("click", function(event) {
      event.preventDefault(); // отменяем действие ссылки
      cart_popup.classList.remove("open-popup-animation2");
      cart_popup.classList.add("close-popup-animation2");
      setTimeout( function() {
        cart_popup.classList.add("hidden"); // добавляем класс hidden у модального окна
      }, 500);
        });

}





