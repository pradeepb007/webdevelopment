import Post from "./Post"
import Grid from "@mui/material/Grid";
const ListPage = ({ searchResults }) => {

    const results = searchResults.map(post => <Post key={post.Id} post={post} />)

    const content = results?.length ? results : <article><p>No Matching Posts</p></article>

    return (
        <main> <Grid container spacing={2}>{content}</Grid></main>
    )
}
export default ListPage