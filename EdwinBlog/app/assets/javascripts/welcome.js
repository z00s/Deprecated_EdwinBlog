

window.onload = function(){
    var btn = document.getElementById("btn");
    btn.onclick = function() {
        $('body').hasClass('open') ? $('body').removeClass('open'):$('body').addClass('open')
    }
}
//
//$(function(){
//    btn.onclick = function() {
//        $('#btn').hasClass('open') ? $('#btn').removeClass('open'):$('#btn').addClass('open')
//    }
//})