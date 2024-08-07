let imgbox=document.getElementById("imgbox")
let qrtext=document.getElementById("qrtext")
let qrimage=document.getElementById("qrimg")
let qrtextdisplay=document.getElementById("qrtextdisplay")


function createqr(){
    if(qrtext.value.length>0){
        qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value
        imgbox.classList.add("showimg");
        qrtextdisplay.innerHTML=qrtext.value
        qrtext.value=""

    }
    else{
        qrtext.classList.add("error")
        setTimeout(() => {
            qrtext.classList.remove("error")
        }, 1000);
    }
}

qrtext.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if(qrtext.value.length>0){
            qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value
            imgbox.classList.add("showimg");
            qrtextdisplay.innerHTML=qrtext.value
            qrtext.value=""
    
        }
        else{
            qrtext.classList.add("error")
            setTimeout(() => {
                qrtext.classList.remove("error")
            }, 1000);
        }
    }

    
});
