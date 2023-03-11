import styled from "@emotion/styled";
import {
  Button,
  Card,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Post from "../component/Post";
import Sidebar from "../component/Sidebar";
import { useParams } from "react-router-dom/dist";
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
const SinglePagePost = () => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const fetchPosts = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const res = await data.json();
    setBody(res.body);
    setTitle(res.title);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <Container sx={{ my: 1, padding: 0, marginBottom: 0 }}>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={7}>
            <Main>
              {" "}
              {title && body ? (
                <Card raised sx={{ padding: "1rem", textAlign: "center" }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography gutterBottom color="#555" variant="h4">
                        {title}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography color="#555" variant="h5" component="p">
                        {body}
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              ) : (
                <Grid container spacing={1}>
                  <CircularProgress size={120} />
                </Grid>
              )}
            </Main>
          </Grid>
          <Grid item xs={12} sm={4} justifyContent="center">
            <SidebarStyle>
              <Sidebar />
            </SidebarStyle>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SinglePagePost;
