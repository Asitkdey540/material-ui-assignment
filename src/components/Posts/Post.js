import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css'
import { blue, indigo } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    palette: {
        primary: blue,
        secondary: indigo,
    }
});

const Post = (props) => {
    const { title, body, id } = props.post

    const history = useHistory();
    const handleClick = (postId) => {
        const url = `/postDetail/${postId}`
        history.push(url)
    }

    const classes = useStyles();
    return (
        <div className="post">
            <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {body}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={() => handleClick(id)} size="small" color="primary" variant="outlined">
                            see more
                            </Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    );
};

export default Post;