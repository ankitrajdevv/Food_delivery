// food transitions
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');   
        }
    })
})
const foodelm = document.querySelectorAll('.food');
foodelm.forEach((el) => observer.observe(el))


//add to cart btn
// const btn = document.querySelectorAll(".crt-btn");
// btn.onclick=function(){
//     btn.style.display='none';
// }

//counter
// var num=0;
// const incbtn=document.getElementById("inc");
// const label=document.getElementById("counter");
// const decbtn=document.getElementById("dec");

// decbtn.onclick=function(){
//     if(num<0)
//     {
//         num=0;
//     }
//     else if(num>0)
//     {
//         num-=1;
//         label.innerHTML=num;
//     }
    
// }
// incbtn.onclick=function(){
//     num+=1;
//     label.innerHTML=num;
// }