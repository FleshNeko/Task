/* let pasta = document.getElementById ("pasta");
 document.getElementById ("pasta").onclick = function (){
    alert("food");
 }*/



 let pasta = document.getElementById("pasta");
 let meat = document.getElementById("meat");
 let cheeze = document.getElementById("cheeze");
 let food = Object.assign ({},pasta,meat,cheeze) // я попыталась обьеднить дивы и уже им прописать изменения цвета, но так и не вышло
 food.style.backgroundColor = "red";
 food.onclick = function () { 

    const currentColor = food.style.backgroundColor;

      if (currentColor === "red") food.style.backgroundColor = "blue";
      else if (currentColor === "blue") food.style.backgroundColor = "green";
      else food.style.backgroundColor = "red";

 


 }

 /*let pasta = document.getElementById("pasta");
 pasta.style.backgroundColor = "red";
 pasta.onclick = function () { 

    const currentColor = pasta.style.backgroundColor;

      if (currentColor === "red") pasta.style.backgroundColor = "blue";
      else if (currentColor === "blue") pasta.style.backgroundColor = "green";
      else pasta.style.backgroundColor = "red";
 }

 let meat = document.getElementById("meat");
 meat.style.backgroundColor = "red";
 meat.onclick = function () { 

    const currentColor = meat.style.backgroundColor;

      if (currentColor === "red") meat.style.backgroundColor = "blue";
      else if (currentColor === "blue") meat.style.backgroundColor = "green";
      else meat.style.backgroundColor = "red";
 }

 let cheeze = document.getElementById("cheeze");
 cheeze.style.backgroundColor = "red";
 cheeze.onclick = function () { 

    const currentColor = cheeze.style.backgroundColor;

      if (currentColor === "red") cheeze.style.backgroundColor = "blue";
      else if (currentColor === "blue") cheeze.style.backgroundColor = "green";
      else cheeze.style.backgroundColor = "red";
 }
  //alert(document.getElementById("pasta").style.backgroundColor) */