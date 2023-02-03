import React, {useRef, useEffect} from "react";
import videoFile from './assets/hero.webm';

export default function AutoPlaySilentVideo(props) {
    const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })
    return (
        <div>
        <video
            // className={props.className}
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline
            id="autoplay">
            <source src={videoFile} type="video/mp4"/>
        </video>
        </div>
    );
}