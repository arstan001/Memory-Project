import { Paper } from '@material-ui/core';
import useStyles from './styles'

const Post = ({data})=>{
    const classes = useStyles();
    return (
        <Paper>
        
            <h1>Creator:{data.creator}</h1>
            <h1>Title:{data.title}</h1>
            <h1>Message:{data.message}</h1>
            <h1>Tags:{data.tags.map(tag=><span>{tag}</span>)}</h1>
            <img src={data.selectedFile} alt='' height={60}/>
        </Paper>
    )
}
export default Post