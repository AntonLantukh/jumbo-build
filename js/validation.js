"use strict";var validation=function(e){return e.checkName=function(){var e=document.querySelector("#name");if(document.querySelector(".error__message--name")){var r=document.querySelector(".error__message--name");r.parentNode.removeChild(r)}e.setCustomValidity(""),e.value?(e.setAttribute("style","border: 2px solid rgb(0, 255, 0)"),e.setCustomValidity("")):(e.setCustomValidity("Поле не должно быть пустым"),e.setAttribute("style","border: 2px solid rgb(255, 0, 0)"),e.insertAdjacentHTML("afterend",'<p class="error__message error__message--name">Поле не должно быть пустым</p>'))},e.checkMail=function(){var e=document.querySelector("#mail");if(document.querySelector(".error__message--mail")){var r=document.querySelector(".error__message--mail");r.parentNode.removeChild(r)}e.setCustomValidity(""),e.value?e.value.match("^[A-Za-z0-9][A-Za-z0-9.-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*.)+[A-Za-z]*$")?(e.setAttribute("style","border: 2px solid rgb(0, 255, 0)"),e.setCustomValidity("")):(e.setCustomValidity("Укажите корректный e-mail"),e.setAttribute("style","border: 2px solid rgb(255, 0, 0)"),e.insertAdjacentHTML("afterend",'<p class="error__message error__message--mail">Укажите корректный e-mail</p>')):(e.setCustomValidity("Поле не должно быть пустым"),e.setAttribute("style","border: 2px solid rgb(255, 0, 0)"),e.insertAdjacentHTML("afterend",'<p class="error__message error__message--mail">Поле не должно быть пустым</p>'))},e.checkPhone=function(){var e=document.querySelector("#phone");if(document.querySelector(".error__message--phone")){var r=document.querySelector(".error__message--phone");r.parentNode.removeChild(r)}e.setCustomValidity(""),2===e.value.length?(e.value="",e.setCustomValidity("Поле не должно быть пустым"),e.setAttribute("style","border: 2px solid rgb(255, 0, 0)"),e.insertAdjacentHTML("afterend",'<p class="error__message error__message--phone">Поле не должно быть пустым</p>')):e.value.length<18?(e.setCustomValidity("Укажите корректный номер"),e.insertAdjacentHTML("afterend",'<p class="error__message error__message--phone">Укажите корректный номер</p>'),e.setAttribute("style","border: 2px solid rgb(255, 0, 0)")):(e.setAttribute("style","border: 2px solid rgb(0, 255, 0)"),e.setCustomValidity(""))},e}({});