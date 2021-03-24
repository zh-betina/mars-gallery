import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import GetAppIcon from '@material-ui/icons/GetApp';
import FullscreenIcon from '@material-ui/icons/Fullscreen';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  fullscreen: {
    marginLeft: 'auto'
  }

}));

const PhotoCard = props => {
  const classes = useStyles();
  return (
        <Card className={classes.root}>
            <CardHeader
                title={props.date}
                subheader={props.camera}
            />
            <CardMedia
                className={classes.media}
                image={props.imgSrc}
                title="Photo from Mars"
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="download picture">
                    <GetAppIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton className={classes.fullscreen} aria-label="fullscreen">
                    <FullscreenIcon />
                </IconButton>
            </CardActions>
        </Card>
  );
};

export default PhotoCard;
