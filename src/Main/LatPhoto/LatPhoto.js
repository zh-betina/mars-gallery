import React, { useState } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Tooltip from '@material-ui/core/Tooltip';

import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import GetAppIcon from '@material-ui/icons/GetApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkIcon from '@material-ui/icons/Link';

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
  },
  favIcon: {
    fontSize: '4rem',
    color: '#9c3d54',
    cursor: 'pointer'
  },
  addToGalleryIcon: {
    fontSize: '4rem',
    color: '#3c415c',
    cursor: 'pointer'
  },
  downloadIcon: {
    fontSize: '4rem',
    color: '#536162',
    cursor: 'pointer'
  },
  shareIcon: {
    fontSize: '4rem',
    cursor: 'pointer'
  },
  facebookIcon: {
    fontSize: '4rem',
    cursor: 'pointer',
    color: '#23689b'
  },
  twitterIcon: {
    fontSize: '4rem',
    cursor: 'pointer',
    color: '#23689b'
  },
  linkIcon: {
    fontSize: '4rem',
    cursor: 'pointer',
    color: '#374045'
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
  const [fav, setFav] = useState(false);
  const [shareIconsVisible, setShareIconsVisible] = useState(false);

  const handleZoom = () => {
    if (zoomIn === false) {
      setZoomIn(true);
    } else {
      setZoomIn(false);
    }
  };

  const handleFav = () => {
    if (fav === false) {
      setFav(true);
    } else {
      setFav(false);
    }
  };

  const handleShareIcons = () => {
    if (shareIconsVisible === false) {
      setShareIconsVisible(true);
    } else {
      setShareIconsVisible(false);
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
          <ZoomInIcon className={classes.zoomIcon} />
          <p className="LatPhoto-zoom-txt">Click to Zoom In</p>
        </>
      }>
        <img onClick={handleZoom} className="LatPhoto-img" src={props.imgSrc} alt="Photo from Mars"></img>
      </HtmlTooltip>
      <div className="LatPhoto-icons row">
        {fav ? <FavoriteIcon className={classes.favIcon} onClick={handleFav} /> : <FavoriteBorderIcon className={classes.favIcon} onClick={handleFav} />}
        <AddPhotoAlternateIcon className={classes.addToGalleryIcon} />
        <GetAppIcon className={classes.downloadIcon}/>
        <ShareIcon onClick={handleShareIcons} className={classes.shareIcon}/>
      </div>
      {
        shareIconsVisible
          ? <div className="LatPhoto-icons LatPhoto-icons-share">
        <FacebookIcon className={classes.facebookIcon}/>
         <TwitterIcon className={classes.twitterIcon}/>
         <LinkIcon className={classes.linkIcon}/>
       </div>
          : null
      }

      <Backdrop className={classes.backdrop} open={zoomIn}>
        <CancelOutlinedIcon onClick={handleZoom} className={classes.closeIcon} />
        <img src={props.imgSrc} alt="Photo from Mars fullsize"></img>
      </Backdrop>
    </div>
  );
};

export default LatPhoto;
