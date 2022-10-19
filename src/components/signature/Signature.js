import {useState,useEffect,useRef} from 'react';
import SignatureCanvas from 'react-signature-canvas';

import './Signature.css';

const Signature=()=>{
    const signature=useRef({});
    const [imageUrl,setImageUrl]=useState("");

    useEffect(()=>{
        setTimeout(()=>{
            setImageUrl("");
        },10000);
    },[imageUrl]);

    const clearHandler=()=>{
        signature.current.clear();
    };
    const showHandler=()=>{
        setImageUrl(signature.current.getTrimmedCanvas().toDataURL());
        clearHandler();
    };

    return (
        <div className="signature">
            <div className="signature-left">
                <SignatureCanvas ref={signature} penColor="#003366" canvasProps={{className: "signature-canvas"}} />
                <button className="btn" onClick={clearHandler}>清除</button>
                <button className="btn" onClick={showHandler}>顯示</button>
            </div>
            <div className="signature-success">
                {imageUrl && <><img src={imageUrl} className="image" alt="image" /><a href={imageUrl} download="image.png" className="download-link">下載圖片</a></>}
            </div>
        </div>
    );
}

export default Signature;