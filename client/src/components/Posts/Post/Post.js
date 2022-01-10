import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({data, setCurId})=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={data.selectedFile} title={data.title}/>
            <div className={classes.overlay}>
                <Typography variant='h6'>{data.creator}</Typography>
                <Typography variant='body2'>{moment(data.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size='small' onClick={()=>setCurId(data._id)}>
                    <MoreHorizIcon fontSize='medium'/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>{data.tags.map(tag=>`#${tag} `.replace(/\s/g, ''))}</Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom>{data.title}</Typography>

            <CardContent>
                <Typography variant='body2' color='textSecondary' component="p" gutterBottom>{data.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={()=>dispatch(likePost(data._id))}>
                    <ThumbUpAltIcon fontSize='small'/>
                    &nbsp; Like &nbsp;
                    {data.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={()=>dispatch(deletePost(data._id))}>
                    <DeleteIcon fontSize='small'/>
                    Delete
                </Button>
            </CardActions>
        </Card>
        )
}
export default Post