"use strict";

function changeCheck (item) {
   const checkbox = document.querySelector('.checkbox'+item);
   const content = document.querySelectorAll('.tumbl'+item);

   if (checkbox.checked) {
      for (let i = 0; i <= content.length - 1; i++) {
         if (content[i].getAttribute("tumbl") === "on") {
            content[i].style.display = "inline-block";
         }

         if (content[i].getAttribute("tumbl") === "off") {
            content[i].style.display = "none";
         }
      }
   } else {
      for (let i = 0; i < content.length; i++) {
         if (content[i].getAttribute("tumbl") === "on") {
            content[i].style.display = "none";
         }

         if (content[i].getAttribute("tumbl") === "off") {
            content[i].style.display = "inline-block";
         }
      }
   }
};
