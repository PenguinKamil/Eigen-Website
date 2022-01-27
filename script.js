var I = 0;
var txt = 'De wijze grote uitgebreide kennis van Kamil'; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */
 
function typeWriter() {
 if (I < txt.length) {
   document.getElementById("demo").innerHTML += txt.charAt(I);
   I++;
   setTimeout(typeWriter, speed);
 }
}
 
window.document.onload(typeWriter())
