"use strict";!function(){var t=document.querySelector(".slider-products__container--second"),e=document.querySelector(".slider-products__button--left"),r=document.querySelector(".slider-products__button--right"),n=document.querySelectorAll(".slider-products__element"),c=0;e.addEventListener("click",function(){c=Math.min(c+240,0),t.setAttribute("style","margin-left:"+c+"px")}),r.addEventListener("click",function(){c=Math.max(c-240,-240*(n.length-4)),t.setAttribute("style","margin-left:"+c+"px")})}();