import Post from "./Post/Post"
import useStyles from './styles'
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from "@material-ui/core";

const Posts = ({setCurId})=>{
    const classes = useStyles();
    const posts = useSelector((state)=> state.posts)
    return (!posts.length ? <CircularProgress/> :
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map(post=><Grid item key={post._id} xs={12} sm={6}>
                    <Post data={post} setCurId={setCurId}/>
                </Grid>)}
        </Grid>
    )
}
export default Posts