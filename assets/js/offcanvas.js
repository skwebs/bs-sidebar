(function () {
'use strict'
var overlay = document.createElement('div');
overlay.setAttribute("class","overlay");
document.body.appendChild(overlay);
document.querySelector('[data-toggle="offcanvas"]').addEventListener('click', sidebarToggle)
overlay.addEventListener('click', sidebarToggle)
document.querySelector('[data-toggle="offcanvas"]').addEventListener('click', sidebarToggle)
function sidebarToggle(){
	document.querySelector('.offcanvas-collapse').classList.toggle('open');
	overlay.classList.toggle('open');
	document.querySelector(".hamburger").classList.toggle("is-active");
}
$(document).on("show.bs.dropdown", ".dropdown", function() {
$(this).find(".dropdown-menu").first().stop(!0, !0).slideDown(), $(this).find(".dropdown-toggle").delay(300).addClass("active")
}), $(document).on("hide.bs.dropdown", ".dropdown", function() {
$(this).find(".dropdown-menu").first().stop(!0, !0).slideUp(), $(this).find(".dropdown-toggle").delay(300).removeClass("active")
})

})()