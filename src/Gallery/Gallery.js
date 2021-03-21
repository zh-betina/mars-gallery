import { useState } from "react";

import Title from "../Title/Title";
import Chip from '@material-ui/core/Chip';

import "./Gallery.css";

const Gallery = props => {
    const cameras = {
        "FHAZ": "Front Hazard Avoidance Camera",
        "RHAZ": "Rear Hazard Avoidance Camera",
        "MHAZ": "Mast Camera",
        "CHEMCAM": "Chemistry and Camera Complex",
        "MAHLI": "Mars Hand Lens Imager",
        "MARDI": "Mars Descent Imager",
        "NAVCAM": "Navigation Camera",
        "PANCAM": "Panoramic Camera",
        "MINITES": "Miniature Thermal Emission Spectrometer (Mini-TES)"
    };

    const handleCameraChoice = (camera)=>{
        setTitleTxt(` - ${camera[1]}`);
    }

    console.log(props.isGalleryChosen);
    const [titleTxt, setTitleTxt] = useState("");
    return (
        <main className="Main">
            <Title txt={`gallery ${titleTxt}`} />
            <p>Filter by camera</p>
            <section className="row Gallery-chips">
                {
                    Object.entries(cameras).map((camera, index) => {
                        return <Chip onClick={()=> handleCameraChoice(camera)} 
                        key={index} 
                        label={camera[0]} 
                        variant="outlined" 
                        color="secondary"/>
                    })
                }
            </section>
            <section className="Gallery">

            </section>
        </main>
    )
}

export default Gallery;