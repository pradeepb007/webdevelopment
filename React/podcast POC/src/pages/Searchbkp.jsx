import React, { useState, useEffect } from "react";
import axios from "axios";


import { Container } from "@mui/system";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Search() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);

  const [filteredData, setFilteredData] = useState(posts);

  const handleSearch = (event) => {
    let value = event.target.value;
    let result = [];
    console.log(value);
    console.log(posts);
    result = posts.filter((data) => {
      return data.Name.search(value) != -1;
    });
    setFilteredData(result);
  };

  const fetchDetails = () => {
    const trendingAPI =
      "https://dev1services.shotclasses.com/api/v3/me/ShotClasses/assigned/none?pageNum=1&pageSize=20&Locale=en-GB";
    const profileAPI = "https://dev1services.shotclasses.com/api/v3/me/profile";

    const getTrendingPosts = axios.get(trendingAPI, {
      headers: {
        Accept: "application/json",
        AuthenticationToken:
          "Wk12RO/MkB6llxmNBQV+NLtkBFRQqgw5kGnFI4EZQKEEDxiux0QfuAo9rAHGSrJEk1ZNnbqesXjy4VigGpIebg==",
        TenantSlugName: "UnileverDevPodcast",
      },
    });
    const getUserProfile = axios.get(profileAPI, {
      headers: {
        Accept: "application/json",
        AuthenticationToken:
          "Wk12RO/MkB6llxmNBQV+NLtkBFRQqgw5kGnFI4EZQKEEDxiux0QfuAo9rAHGSrJEk1ZNnbqesXjy4VigGpIebg==",
        TenantSlugName: "UnileverDevPodcast",
      },
    });

    axios
      .all([getTrendingPosts, getUserProfile])
      .then(
        axios.spread((...allData) => {
          const getTrendingContent = allData[0].data.Content;
          const getUSerContent = allData[1].data;

          setPosts(getTrendingContent);
          //  setPosts(prev => prev = {getTrendingContent})
          setFilteredData(getTrendingContent);
          setUser(getUSerContent);
          //  console.log(getTrendingContent);
          //console.log(getUSerContent);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const trending = filteredData.map((videoItem, index) => {
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
        <section className="section trending">
          <Container>
            <div>
              <label>Search:</label>
              <input type="text" onChange={(event) => handleSearch(event)} />
            </div>
            <br />
            <br />
            <hr />

            <Typography variant="h3" component="p">
              <strong> Search Results </strong>
            </Typography>
            <br />
            <Grid container spacing={2}>
              {trending}
            </Grid>
          </Container>
        </section>
      </div>
    </div>
  );
}
