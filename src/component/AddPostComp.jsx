import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import validate from '../utils/validation/addPostValidate';

const AddPostComp = () => {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [error, setError] = useState(false);

   const HandleSubmit=(e)=>{
        e.preventDefault();
        const validationError=validate(title.trim(),content.trim())
        setError(validationError)
   }
   const handleChange = (e) => {
    setContent(e.target.value);
    const validationError=validate(title.trim(),content.trim())
        setError(validationError)
};

  return (
    <form onSubmit={HandleSubmit}>
    <TextField id="outlined-basic" label="post title" variant="outlined" fullWidth
    sx={{mb:2}}
    helperText={error&&error.title}
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    error={!!error.title}

    />
    <TextField
          id="outlined-multiline-flexible"
          label="Post content"
          multiline
          rows={4}
          fullWidth
          sx={{mb:2}}
          helperText={error&&error.content}
          value={content}
          onChange={handleChange}
          error={!!error.content}

        />
        <Button type="submit" fullWidth variant='contained' color='success'>
            Add Post
        </Button>
    </form>
  )
}

export default AddPostComp
