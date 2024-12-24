let btn1 = document.querySelector('#addBtn1');
let input1 = document.querySelector('#input1');
let btn2 = document.querySelector('#addBtn2');
let input2 = document.querySelector('#input2');

//1
btn1.addEventListener('click',function(){
  let inputVal = input1.value;
  let xml =new XMLHttpRequest();
  xml.open('post','/save');
  xml.onreadystatechange = function(){
    if(xml.readyState == 4 && xml.status ==200){
        console.log(xml.responseText);
       // document.getElementById('a10').innerHTML=data[5].name; 
       document.getElementById('a1').innerHTML=xml.responseText;
     }}
        xml.setRequestHeader('Content-Type','application/json')
        xml.send(JSON.stringify({msg:inputVal}));
          })

//2
btn2.addEventListener('click',function(){
    let inputVal = input2.value;
    let xml =new XMLHttpRequest();
    xml.open('post','/sav');
    xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status ==200){
            console.log(xml.responseText);
           // document.getElementById('a10').innerHTML=data[5].name; 
           document.getElementById('a1').innerHTML=xml.responseText;
        }}
           xml.setRequestHeader('Content-Type','application/json')
           xml.send(JSON.stringify({msg:inputVal}));
            })