const input = document.getElementById('city');
const check = document.getElementsByClassName('temp')[0];
const screen =  document.getElementsByClassName('screen')[0];


check.onclick = function(){
const http = new XMLHttpRequest();
const keyword = input.value;
http.onreadystatechange = function(){
if(http.readyState === 4 && http.status === 200){
const post = JSON.parse(http.responseText).list;
post.forEach(element => {
const p = document.createElement('p');
p.innerText =element.dt_txt + " / "  + element.main.temp;
screen.appendChild(p);
});
}
else{
screen.innerText = "Temperature in " + keyword;    
}

}

http.open("GET","https://api.openweathermap.org/data/2.5/forecast?q="+ keyword +
"&APPID=d2f85a581977a2e39aa72fa8f11e74d8");
http.send();
}

