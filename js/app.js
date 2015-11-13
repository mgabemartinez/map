$(document).ready(function() {  
$('a[href=#home]').click(function() {  
var target = $(this.hash);  
if (target.length == 0) target = $('a[name=#home"' + this.hash.substr(1) + '"]');  
if (target.length == 0) target = $('html');  
$('html, body').animate({ scrollTop: target.offset().top }, 800);  
return false;  
});  
});