// const h=document.querySelector(".hrs")
// const m=document.querySelector(".mins")
// const s=document.querySelector(".secs")

setInterval(()=>{
    d=new Date()
    hr=d.getHours()
    min=d.getMinutes()
    sec=d.getSeconds()
    hrrotation=30*hr + min/2
    minrotation=6*min
    secrotation=6*sec

// document.getElementsByClassName(".secs").style.transform=`rotate(${secrotation}deg)`


    document.querySelector(".hrs").style.transform=`rotate(${hrrotation}deg)`
    document.querySelector(".mins").style.transform=`rotate(${minrotation}deg)`
    document.querySelector(".secs").style.transform=`rotate(${secrotation}deg)`

    // console.log(d,hr,min,sec);
    
},1000)
