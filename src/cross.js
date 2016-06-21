var param = document.location.hash.split("#")[1];
if (param){
var d = document.createElement('div');
d.innerHTML = param;
if (document.body != null){
document.body.appendChild(d);
}}

function go(){
if (document.location.hash.split("#")[1]){
document.location.replace(document.location.hash.split("#")[1]);
}}
