var I = 0;
var txt = 'Holman, T. (2017). Een dictator? Je krijgt er een heerlijk leven voor terug. Het Parool.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
 
function typeWriter() {
 if (I < txt.length) {
   document.getElementById("demo").innerHTML += txt.charAt(I);
   I++;
   setTimeout(typeWriter, speed);
 }
}
 
window.document.onload(typeWriter())
