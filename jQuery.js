$("div").css("backgroundColor", "purple");
$(".highlight").css("width", "200px");
$("#third").css("border", "2px solid orange");
$("div:nth-of-type(2)").css("color","pink") // css pseudocode, same as div:first-of-type




//Different methods 
//css("property","value") --> .style.property="value"
//text("set") --> textContent
//html("set") --> innerHTML
//attr("get","set") --> getAttribute() + setAttribute()
//val("get","set") --> Value (both getter + setter)
//last --> returns the last element in jQuery object
//addClass("css classname") --> classList.add()
//removeClass("classname") --> classList.remove()
//toggleClass("classname") --> classList.toggle()
// jQueryEvent:
//$(this) --> this
//$(button).click(function(){}) --> documents.getElementsByTagName("button").addEventListener("click",function(){})