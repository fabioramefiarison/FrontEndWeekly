function Get(id){
    return document.getElementById(id)
}

const faBars = document.querySelector(".fa-bars")
const nabvList = document.querySelector("#nav-list-option ul ")

faBars.addEventListener('click' , ()=>{
    nabvList.style.display = "inline"
})

const target = Get("poste");
    let array = ["Style guide"];
    let i=0;
    let j=0;

    const creationLettre = () =>{
         const lettre = document.createElement('span');
         target.appendChild(lettre);
         lettre.textContent = array[i][j];  
         setTimeout(() => {
            lettre.remove();
        }, 2800);
        
    }
    function tourne() {
      setTimeout(()=>{
if (j<array[0].length) {
   creationLettre();
   j++;
    tourne();}
    else{
    j=0;
    i=0;
   
setTimeout(() => {
    tourne();
}, 2800);}
      },50)
    }
    tourne();