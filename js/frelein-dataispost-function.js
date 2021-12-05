// Lazy Fancy Box
var lazyfancybox=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyfancybox||0!=document.body.scrollTop&&!1===lazyfancybox)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyfancybox=!0)},!0);
// CSS Fancy Box
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css");
// Fancybox Setting
$(document).ready(function(){$(".post-body img").parent("a:not(.no-lightbox)").each(function(){$(this).attr("src",$(this).find("img").attr("src")),$(this).attr("data-fancybox","postimages")}),$(".post-body img").parent("a:not(.no-lightbox)").fancybox({margin:[50,0],onComplete:function(t,o){t.scaleToActual(0,0,0),console.log(t)}})});
// Remove First Image Posts
$(function(){$(".separator:first").remove(),$(".post-body > img:first").remove()});
// Disqus Onclick
window.disqus_blogger_current_url=$("link[rel=canonical]").attr("href"),window.disqus_shortname="frelein",$("#freleinDisqus").on("click",function(){$.ajax({type:"GET",url:"//"+disqus_shortname+".disqus.com/blogger_item.js",dataType:"script",cache:!0}),$(this).fadeOut()});
// Subtitle Switcher
const tabs=document.querySelectorAll('[data-target'),tabContents=document.querySelectorAll('[data-content]')
tabs.forEach(tab=>{tab.addEventListener('click',()=>{const target=document.querySelector(tab.dataset.target)
tabContents.forEach(tabContents=>{tabContents.classList.remove('sub_active')})
target.classList.add('sub_active')
tabs.forEach(tab=>{tab.classList.remove('sub_active')})
tab.classList.add('sub_active')})})
