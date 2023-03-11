import styled from "@emotion/styled";
import {
  Button,
  CircularProgress,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Post from "../component/Post";
import Sidebar from "../component/Sidebar";
import FeaturedPost from "../component/FeaturedPost";
const Main = styled("div")`
  max-width: 90%;
  color: #fff;
  margin: 1rem auto;
  @media (max-width: 600px) {
    color: yellow;
    margin: 3rem auto;
    max-width: 100%;
  }
`;
const SidebarStyle = styled("div")`
  color: #fff;
  margin: 1rem auto;
  padding: 1rem;
`;
const Home = () => {
  const [page, setPage] = useState(1);
  const [psosts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}`
    );
    const res = await data.json();
    setPosts(res);
  };
  useEffect(() => {
    fetchPosts();
  }, [page]);

  const items =
    psosts.length > 0 ? (
      psosts.map((post) => (
        <Grid item md={6} key={post.id}>
          <Post title={post.title} body={post.body} id={post.id} />
        </Grid>
      ))
    ) : (
      <Grid item md={6}>
        <CircularProgress size={120} />
      </Grid>
    );
  return (
    <>
      <Container sx={{ my: 1, padding: 0, marginBottom: 0 }}>
        <FeaturedPost />
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={7}>
            <Main>
              {" "}
              <Grid
                container
                spacing={1}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Typography color="#555" variant="h3">
                    Blog Posts
                  </Typography>
                </Grid>
                {items}
              </Grid>
            </Main>
          </Grid>
          <Grid item xs={12} sm={4} justifyContent="center">
            <SidebarStyle>
              <Sidebar />
            </SidebarStyle>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Pagination
              count={10}
              color="success"
              defaultPage={2}
              onChange={(e, value) => setPage(value)}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
