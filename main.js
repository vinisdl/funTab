$(function() {
        var cor = '#';
        var codigoCorHex = ['064d41','d44d4d','35a59a','6e0892','c83759','126518','941616','d49703', '0a0a2e', 'c63b04'];
        cor += codigoCorHex[Math.floor(Math.random() * codigoCorHex.length)];
        document.body.style.background = cor;

    $.getJSON("https://api-jotapoeam.herokuapp.com/poems/1/random", function(data) {
       document.getElementById("posts").innerHTML = data.description;
    });
});