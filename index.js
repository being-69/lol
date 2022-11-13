





setInterval(()=>{
    

let a=new Date()
let hour=a.getHours()
let minute=a.getMinutes()
let second=a.getSeconds()
let hrotation=30*hour+minute/2;
let mrotation=6*minute;
let srotation=6*second

Hour.style.transform=`rotate(${hrotation}deg)`
Minute.style.transform=`rotate(${mrotation}deg)`
Second.style.transform=`rotate(${srotation}deg)`


})




















