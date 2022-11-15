const element = document.querySelector(".qr-input button");
qr_input = document.querySelector(".qr-input input")
qr = document.querySelector(".imge");
qr_img = document.querySelector(".imge img")

element.addEventListener("click", ()=>{
    let qr_value = qr_input.value;
    
    if(!qr_value){
        return alert("Enter text or url for QR code generation!!");
    }
    element.innerHTML = "Generating QR Code..."
    qr_img.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${qr_value}`;
    qr_img.addEventListener("load",()=>{
        qr.classList.add("active");
        element.innerHTML="Generate QR Code"
    });
    
});
qr_input.addEventListener("keyup",()=>{
    if(!qr_input.value){
        qr.classList.remove("active");

    }
})