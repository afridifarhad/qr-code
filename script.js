const qrText = document.getElementById("qr-Text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;

// this function not refresh the page when you click the refresh or generate
generateBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    isEmptyInput();
  
});

sizes.addEventListener("change", (e)=>{
    size = e.target.value;
    isEmptyInput();
});

downloadBtn.addEventListener("click", (e)=>{
    let img = document.querySelector(".qr-body img");
    
    if(img !== null){
    let imgAtrr = img.getAttribute("src");
    document.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
    }

});


function isEmptyInput (){
//     if(qrText.value.length > 0){
//     generateQRCode();
// }
//   else{
//     alert("Enter the text or url");
//   }

qrText.value.length > 0 ? generateQRCode() :alert("Enter the Text or URL to generate QRCode");


}

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
        
    });
}