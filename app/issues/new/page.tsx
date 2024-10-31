'use client';
import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes';
import { Input } from 'postcss';

 const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        {/* <TextField.Root> */}
            <TextField.Root placeholder='Title' />
             
        {/* </TextField.Root> */}

        <TextArea placeholder='Description' />
        <Button>Submit New Isuue</Button>

    </div>
  )
}

export default NewIssuePage