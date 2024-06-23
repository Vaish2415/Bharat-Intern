var inputvalue=document.querySelector('#cityinput')
var btn=document.querySelector('#add');
var city=document.querySelector('#cityoutput')
var descrip=document.querySelector('description')
var temp=document.querySelector('#temp')
var wind=document.querySelector('#wind')
apik="63a90ae96d390ec37d6c1252f5a86e1a"
function convertion(val){
    return(val-273).toFixed(3)
}
btn.addEventListener('click',function(){
    fetch('https://in.search.yahoo.com/search?p=weathermap&fr=srp-dd-share&fr2=p:s,v:w,m:weatherInfo,ct:copy-link'+inputvalue.value+'&appid='+apik)
    .then(res=>res.json())
    .then(data =>
    {
        var nameval=data['naame']
        var descrip=data['weather']['0']['description']
        var temperature=data['main']['temp']
        var wndspeed=data['wind']['speed']
        city.innerHTML='weather of <span>${nameval}<span>'
        temp.innerHTML='temperature:<span>${descrip}<span>'
        description.innerHTML='sky conditions:<span>${descrip}<span>'
        wind.innerHTML='wind speed:<span>${wndspeed}km/h<span>'
    })
    .catch(err => alert('you entered wrong city'))
})
