import { React, useState } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Tooltip from '@material-ui/core/Tooltip';

import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

import './LatPhoto.css';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  },
  closeIcon: {
    fill: 'white',
    position: 'absolute',
    zIndex: '100',
    top: '2rem',
    right: '2vw',
    fontSize: '6rem',
    cursor: 'pointer'
  },
  zoomIcon: {
    fontSize: '3rem',
    color: '#151515'
  }
}));

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#a98b98',
    color: 'rgba(0, 0, 0, 0.87)',
    width: 240,
    fontSize: theme.typography.pxToRem(25),
    border: '1px solid #151515'
  }
}))(Tooltip);

const LatPhoto = props => {
  const classes = useStyles();
  const [zoomIn, setZoomIn] = useState(false);

  const handleZoom = () => {
    if (zoomIn === false) {
      setZoomIn(true);
    } else {
      setZoomIn(false);
    }
  };

  return (
        <div className="LatPhoto-wrapper">
            <div className="row">
                <h3 className="LatPhoto-title">{props.camera}</h3>
                <h4 className="LatPhoto-date">{props.date}</h4>
            </div>
            <HtmlTooltip placement="left-start" title={
                <>
                    <ZoomInIcon className={classes.zoomIcon}/>
                    <p className="LatPhoto-zoom-txt">Click to Zoom In</p>
                </>
            }>
                <img onClick={handleZoom} className="LatPhoto-img" src={props.imgSrc} alt="Photo from Mars"></img>
            </HtmlTooltip>
            <Backdrop className={classes.backdrop} open={zoomIn}>
                <CancelOutlinedIcon onClick={handleZoom} className={classes.closeIcon} />
                <img src={props.imgSrc} alt="Photo from Mars fullsize"></img>
            </Backdrop>
        </div>
  );
};

export default LatPhoto;
