const click=document.querySelector('.click');
const giftBox=document.querySelector('.gift-box');
const Shadow=document.querySelector('.shadow');


click.addEventListener('click',()=>{
    if(click.className==="click"){
        click.classList.add('active')
        giftBox.classList.add('active')
        Shadow.classList.add('active')
    }
    else{
        click.classList.remove('active')
        giftBox.classList.remove('active')
        Shadow.classList.remove('active')
    }

})