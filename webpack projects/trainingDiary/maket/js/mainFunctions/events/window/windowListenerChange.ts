import { storage } from "@firebaseFolder/firebaseInit";
import { TuserUid } from "@js/types/stateTypes";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

let userImg: File
export function windowListenerChange(event: any): void{

    if(event.target.files){
        userImg = event.target.files[0]
    }
} 

export async function sendingImgToServer(userUid: TuserUid, trainingNumber: string){
    await uploadBytes(ref(storage, `previews/usersPreviews/${userUid}/trainingList/${trainingNumber}/png/preview.png`), userImg)
    await getDownloadURL(ref(storage, `previews/usersPreviews/${userUid}/trainingList/${trainingNumber}/png/preview.png`))

    return pngTransformWebp(userImg, userUid, trainingNumber)
}

function pngTransformWebp(pngImg: File, userUid: TuserUid, trainingNumber: string){
    return new Promise((res, rej)=>{

        let myImage
        const image = new Image();
        image.src = URL.createObjectURL(pngImg);
        image.onload = () => {
            const canvas: any = document.createElement('canvas');
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
            canvas.getContext('2d').drawImage(image, 0, 0);
            canvas.toBlob((blob: Blob) => {
                if(!blob){return}
                myImage = new File([blob], 'my-new-name.webp', { type: blob.type });
                uploadBytes(ref(storage, `previews/usersPreviews/${userUid}/trainingList/${trainingNumber}/webp/preview.webp`), myImage)
                    .then(rez=>res(rez))
                    .catch(rez=>rej(rez))
            }, 'image/webp');
        };

    })
}