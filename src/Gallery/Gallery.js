import React, { useState, useEffect } from 'react';

import Title from '../Title/Title';
import Chip from '@material-ui/core/Chip';
import PhotoCard from './PhotoCard/PhotoCard';
import CircularProgress from '@material-ui/core/CircularProgress';

import './Gallery.css';

const Gallery = () => {
  //  const [loader, setLoader] = useState(true);
  const loader = true;
  const cameras = {
    FHAZ: 'Front Hazard Avoidance Camera',
    RHAZ: 'Rear Hazard Avoidance Camera',
    MHAZ: 'Mast Camera',
    CHEMCAM: 'Chemistry and Camera Complex',
    MAHLI: 'Mars Hand Lens Imager',
    MARDI: 'Mars Descent Imager',
    NAVCAM: 'Navigation Camera',
    PANCAM: 'Panoramic Camera',
    MINITES: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
  };

  const handleCameraChoice = (camera) => {
    setTitleTxt(` - ${camera[1]}`);
  };

  useEffect(() => {

  }, []);

  const [titleTxt, setTitleTxt] = useState('');
  return (
        <main className="Main">
            <Title txt={`gallery ${titleTxt}`} />
            <h4 className="Title-gallery">One-week period collection</h4>
            <p>Filter by camera</p>
            <section className="row Gallery-chips">
                {
                    Object.entries(cameras).map((camera, index) => {
                      return <Chip onClick={() => handleCameraChoice(camera)}
                            key={index}
                            label={camera[0]}
                            variant="outlined"
                            color="secondary" />;
                    })
                }
            </section>
            <section className="Gallery">
                {
                    loader ? <CircularProgress /> : <PhotoCard camera="Some camera" date="2021-20-03" imgSrc="https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03062/opgs/edr/fcam/FRB_669319132EDR_F0870792FHAZ00341M_.JPG" />
                }
            </section>
        </main>
  );
};

export default Gallery;
