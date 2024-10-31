'use client';
import { Button, TextField } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React from 'react'

 const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        {/* <TextField.Root> */}
            <TextField.Root placeholder='Title' />
             
        {/* </TextField.Root> */}

        <SimpleMDE placeholder='Description' />
        <Button>Submit New Isuue</Button>

    </div>
  )
}

export default NewIssuePage