const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const passBtn= document.getElementById('pass-btn')
const resetBtn= document.getElementById('reset-btn')
const pass1= document.getElementById('pass1')
const pass2= document.getElementById('pass2')
let canRender=true


passBtn.addEventListener('click',function(){
    if(canRender===true){
        let passLength=parseInt(window.prompt('Set password length between 1-15'))
        if( /^\d+$/.test(passLength) && passLength>=1&&passLength<=15){
            for(let i=0;i<passLength;i++){
                let random1=Math.floor(Math.random()*characters.length)
                pass1.textContent+=characters[random1]
                canRender=false
            }
            for(let i=0;i<passLength;i++){
                let random2=Math.floor(Math.random()*characters.length)
                pass2.textContent+=characters[random2]
                canRender=false
            }
        }else{
            alert('Set a valid number between 1-15')
        }
    }
})

resetBtn.addEventListener('click',function(){
    canRender=true
    pass1.textContent=''
    pass2.textContent=''
    
})


