import React from 'react';
import {
  Container,
  FormContent,
  FormH1,
  FormWrap,
  Icon,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from './SigninElements';

function SignIn() {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput htmlFor="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput htmlFor="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignIn;
