import React, { useState, useEffect } from "react";
import axios from "axios";
import PrimarySearchAppBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "@mui/system";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function FetchData() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);

  const fetchDetails = () => {
    const trendingAPI =
      "https://dev1services.shotclasses.com/api/v3/ShotClasses/81399?locale=en-GB";
    const profileAPI = "https://dev1services.shotclasses.com/api/v3/me/profile";

    const getTrendingPosts = axios.get(trendingAPI, {
      headers: {
        Accept: "application/json",
        AuthenticationToken:
          "86SAzmFR7VMj2AfhdXEptixi3DzGw00qbvzV4Iufr/8YjgP1B6jbcia+ULTSkRAXwDVBBIiIcaThf9PZ61UOGQ==",         
        TenantSlugName: "UnileverDevPodcast",
      },
    });
    const getUserProfile = axios.get(profileAPI, {
      headers: {
        Accept: "application/json",
        AuthenticationToken:
          "86SAzmFR7VMj2AfhdXEptixi3DzGw00qbvzV4Iufr/8YjgP1B6jbcia+ULTSkRAXwDVBBIiIcaThf9PZ61UOGQ==",
        TenantSlugName: "UnileverDevPodcast",
      },
    });


    
    axios
      .all([getTrendingPosts, getUserProfile])
      .then(
        axios.spread((...allData) => {
          const getTrendingContent = allData[0].data;
          const getUSerContent = allData[1].data;
         
         // setPosts(getTrendingContent);


          setPosts(prev => prev = {getTrendingContent})


          setUser(getUSerContent);
          console.log(posts);
          console.log(getUSerContent);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const trending = posts.map((videoItem, index) => {
    return (
      <Grid item md={3} xs={12} key={videoItem.ID} className="trending-post">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={videoItem.VideoThumbnailUrl}
              alt={videoItem.ImageUrl}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {videoItem.Name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {videoItem.Description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

  return (
    <div>
      <div className="main-container">
        <PrimarySearchAppBar />
        <section className="page-heading">
          <Container>
            <Typography variant="h3" component="p">
              <strong>               
                Welcome back :  
                {/* <img src={user.ProfileImageUrl} alt="profile pic"/> */}
                {user.FirstName} {user.LastName}
              </strong>
            </Typography>
          </Container>
        </section>

        <section className="section trending">
          <Container>
            <Typography variant="h3" component="p">
              <strong> Trending Posts : {posts.length} </strong>
            </Typography>
            <br />
            <Grid container spacing={2}>
              {trending}
            </Grid>
          </Container>
        </section>
      </div>

      <Footer />
    </div>
  );
}
