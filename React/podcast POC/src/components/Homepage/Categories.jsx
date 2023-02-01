import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import classNames from "classnames";
import Slider from "react-slick";
import styles from "./Categories.module.scss";

export default function Categories() {
  const [isActive, setIsActive] = useState(true);
  const [categories, setCategories] = useState(true);
  const [trending, setTrending] = useState(false);
  const [listened, setlistened] = useState(false);
  const [popular, setPopular] = useState(false);
  const [livepodcast, setLivepodcast] = useState(false);

  const handleClick = event => {  
    setIsActive(current => !current);
  };

  const showCategories = () => {
    handleClick();
    setCategories(true);
    setTrending(false);
    setlistened(false);
    setPopular(false);
    setLivepodcast(false);
  };
  const showTrending = () => {
    handleClick();
    setCategories(false);
    setTrending(true);
    setlistened(false);
    setPopular(false);
    setLivepodcast(false);
  };
  const showListened = () => {
    handleClick();
    setCategories(false);
    setTrending(false);
    setlistened(true);
    setPopular(false);
    setLivepodcast(false);
  };
  const showPopular = () => {
    handleClick();
    setCategories(false);
    setTrending(false);
    setlistened(false);
    setPopular(true);
    setLivepodcast(false);
  };
  const showLivepodcast = () => {
    handleClick();
    setCategories(false);
    setTrending(false);
    setlistened(false);
    setPopular(false);
    setLivepodcast(true);
  };

  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 565,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

 
  return (
    <div className={styles.categories}>
      <Container maxWidth="xl">
        <Slider {...settings}>
          <div
            className={classNames(styles.slideItem, {
              [styles.active]: isActive,
            })}
            onClick={showCategories}
          >
            <div className={styles.catgoryIcon}>
              <img src="assets/icons/categories.svg" alt="categories-icon" />
            </div>
            <Typography
              variant="h3"
              component="p"
              className={styles.catgoryName}
            >
              Categories
            </Typography>
          </div>
          <div
            className={classNames(styles.slideItem, {
              [styles.active]: isActive,
            })} onClick={showTrending}>
            <div className={styles.catgoryIcon}>
              <img src="assets/icons/trending.svg" alt="trending-icon" />
            </div>
            <Typography
              variant="h3"
              component="p"
              className={styles.catgoryName}
            >
              Trending
            </Typography>
          </div>
          <div
            className={classNames(styles.slideItem, {
              [styles.active]: isActive,
            })} onClick={showListened}>
            <div className={styles.catgoryIcon}>
              <img
                src="assets/icons/most-listened.svg"
                alt="most-listened-icon"
              />
            </div>
            <Typography
              variant="h3"
              component="p"
              className={styles.catgoryName}
            >
              Most listened
            </Typography>
          </div>
          <div
            className={classNames(styles.slideItem, {
              [styles.active]: isActive,
            })} onClick={showPopular}>
            <div className={styles.catgoryIcon}>
              <img src="assets/icons/best-quality.svg" alt="popular-icon" />
            </div>
            <Typography
              variant="h3"
              component="p"
              className={styles.catgoryName}
            >
              Popular
            </Typography>
          </div>
          <div
            className={classNames(styles.slideItem, {
              [styles.active]: isActive,
            })} onClick={showLivepodcast}>
            <div className={styles.catgoryIcon}>
              <img
                src="assets/icons/microphone-live.svg"
                alt="microphone-live-icon"
              />
            </div>
            <Typography
              variant="h3"
              component="p"
              className={styles.catgoryName}
            >
              Live Podcast
            </Typography>
          </div>
        </Slider>

        {categories ? (
          <div className={styles.section}>
            <Typography
              variant="h2"
              component="h2"
              className={styles.catgoryHeading}
            >
              Categories
            </Typography><br/>
            <a href="/AzureMediaPlayer" title="/AzureMediaPLayer"> Azure Default Skin </a> <br/><br/>
            <a href="/AzureFlushSkin" title="/AzureFlushSkin"> Azure Flush Skin </a><br/><br/>

            <a href="/Search" title="/Search"> Search </a><br/><br/>

            <a href="/VideoPlayer" title="/VideoPlayer"> Video Player </a>
          </div>
        ) : null}

        {trending ? (
          <div className={styles.section}>
            <Typography
              variant="h2"
              component="h2"
              className={styles.catgoryHeading}
            >
              Trending
            </Typography>
          </div>
        ) : null}

        {listened ? (
          <div className={styles.section}>
            <Typography
              variant="h2"
              component="h2"
              className={styles.catgoryHeading}
            >
              Most Listened
            </Typography>
          </div>
        ) : null}

        {popular ? (
          <div className={styles.section}>
            <Typography
              variant="h2"
              component="h2"
              className={styles.catgoryHeading}
            >
              Popular
            </Typography>
          </div>
        ) : null}

        {livepodcast ? (
          <div className={styles.section}>
            <Typography
              variant="h2"
              component="h2"
              className={styles.catgoryHeading}
            >
              Live Podcasts
            </Typography>
          </div>
        ) : null}      
      </Container>
    </div>
  );
}
