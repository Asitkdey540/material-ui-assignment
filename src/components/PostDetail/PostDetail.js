import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Comment from '../Comments/Comment';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});


const PostDetail = () => {
    const { id } = useParams()
    const classes = useStyles();
    const [postDetail, setPostDetail] = useState([])
    const [comment, setComment] = useState([])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPostDetail(data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        const url2 = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url2)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setComment(data)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="post">
            <Grid container justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={`https://loremflickr.com/600/400?random=${id}`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {postDetail.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {postDetail.body}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            All Comments:
                        </Typography>
                        {
                            comment.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                        }
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
};

export default PostDetail;