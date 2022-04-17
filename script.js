const videoElement=document.querySelector(".video-element");
const clickButton=document.querySelector(".btn");

async function selectMediaStream(){
    try{
        const mediaStream=await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadedmetadata =()=>{
            videoElement.play();
        }
    }
    catch(error){
        console.log("Oops!! error:"+error);
    }
}

clickButton.addEventListener('click',async ()=>{
    clickButton.disabled=true;
    await videoElement.requestPictureInPicture();
    clickButton.disabled=false;
})
selectMediaStream(); 
