import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const Post = ({ post }) => {
  return (
    <Grid item md={3} xs={12} className="trending-post">
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={post.VideoThumbnailUrl}
            alt={post.ImageUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.Name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.Description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>

    // <article>
    //     <img src={post.VideoThumbnailUrl} />
    //     <h2>{post.Name}</h2>
    //     <p>{post.Description}</p>
    // </article>
  );
};
export default Post;
