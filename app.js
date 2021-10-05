


function indianwatch() {
    
    let options={timeZone : 'Asia/Kolkata'};
    let currentdate=new Date().toLocaleDateString('en-US',options);
    let currenttime=new Date().toLocaleTimeString('en-US',options);
    let date=document.querySelector("#india-date");
    let time=document.querySelector("#india-time");
    date.innerHTML=currentdate
    time.innerHTML=currenttime

};
setInterval(indianwatch,1000);


function americawatch() {
    
    let options={timeZone : 'America/New_York'};
    let currentdate=new Date().toLocaleDateString('en-US',options);
    let currenttime=new Date().toLocaleTimeString('en-US',options);
    let date=document.querySelector("#usa-date");
    let time=document.querySelector("#usa-time");
    date.innerHTML=currentdate
    time.innerHTML=currenttime

};
setInterval(americawatch,1000);


function chinawatch() {
    
    let options={timeZone : 'Asia/Shanghai'};
    let currentdate=new Date().toLocaleDateString('en-US',options);
    let currenttime=new Date().toLocaleTimeString('en-US',options);
    let date=document.querySelector("#china-date");
    let time=document.querySelector("#china-time");
    date.innerHTML=currentdate
    time.innerHTML=currenttime

};
setInterval(chinawatch,1000);