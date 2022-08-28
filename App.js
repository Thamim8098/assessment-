import React from 'react';
import { useForm } from 'react-hook-form';
import Form  from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const {Group, Label, Control} = {...Form}
export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <Container>
    <form onSubmit={handleSubmit(onSubmit)} className="simpleForm">
      <Group>
        <Label>
          Name
        </Label>
        <Control type="text" placeholder="name" name="name" {...register("name",{required: "Name is required"})} />
        <p className="text-danger">{errors.name?.message}</p>
      </Group>

  
      <Group>
        <Label>Email</Label>
        <Control type="text" placeholder="Email" name="Email" {...register("Email",{required: "Email is required"})} />
        <p className="text-danger">{errors.Email?.message}</p>

      </Group>
      <Group>
        <Label>Mobile number</Label>
        <Control  type="tel" placeholder="Mobile number" name="Mobile_number" {...register("Mobile_number",{required:"Mobile_number is required"})} />
        <p className="text-danger">{errors.Mobile_number?.message}</p>
     
      </Group>
      
      <Group>
        <Label>Country</Label>
        <Control  type="text" placeholder="Country" name="country" {...register("country",{required:"country is required"})} />
        <p className="text-danger">{errors.country?.message}</p>
     
      </Group>
      <Group>
        <Label>State</Label>
        <Control  type="text" placeholder="State" name="State" {...register("State",{required:"State is required"})} />
        <p className="text-danger">{errors.State?.message}</p>
     
      </Group>

      <Group>
        <Label>City</Label>
        <Control  type="text" placeholder="City" name="City" {...register("City",{required:"City is required"})} />
        <p className="text-danger">{errors.City?.message}</p>
     
      </Group>
      
      <Group>
        <Label>Messages</Label>
        <Control as="textarea" name="message"  {...register("message",{required:"message is required"})} />
        <p className="text-danger">{errors.message?.message}</p>


        <Button type="submit" >
          Send
        </Button>
      </Group>
    </form></Container>
  );
}