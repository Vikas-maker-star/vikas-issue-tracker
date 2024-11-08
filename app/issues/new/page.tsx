'use client';
import { Button, Callout, Text, TextField } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod' ;
// import React from 'react'
// import { useRouter } from 'next/router';

// interface IssueForm {
//   title: string;
//   description: string;
// }

type IssueForm = z.infer<typeof createIssueSchema>;

 const NewIssuePage = () => {
  const router = useRouter();
  const {register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });
  // console.log(register('title'));
  const [error, setError] = useState('');

  return (
    <div className='max-w-xl'>
       {error && <Callout.Root color='red' className='mb-5'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
    <form 
    className='max-w-xl space-y-3' 
    onSubmit={handleSubmit(async(data) => {
      try {
        await axios.post('/api/issues', data);
        router.push('/issues');
        
      } catch (error) {
        console.log(error)
        setError('An unexpected error occurred.');
      }
    })}>
        {/* <TextField.Root> */}
            <TextField.Root placeholder='Title' {...register('title')} />
             
        {/* </TextField.Root> */}
          {errors.title && <Text color="red" as="p">{errors.title?.message}</Text> }

       <Controller
         name="description"
         control={control}
         render={({ field }) => <SimpleMDE placeholder='Description' {...field}/>}
         />
         {errors.description && <Text color="red" as="p">{errors.description?.message}</Text>}
        <Button>Submit New Isuue</Button>

    </form>
    </div>
  )
}

export default NewIssuePage;