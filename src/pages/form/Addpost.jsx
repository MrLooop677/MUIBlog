import { Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import AddPostComp from '../../component/AddPostComp'

const Addpost = () => {
  return (
    <Paper sx={{maxWidth:"80%",m:"auto",p:2}}>
      <Typography variant="h4" component="h1">Add Post</Typography>
      <Typography variant="body1">Add your new Post using the form below</Typography>
      <Divider sx={{my:3}}/>
      <AddPostComp  />
    </Paper>
  )
}

export default Addpost
