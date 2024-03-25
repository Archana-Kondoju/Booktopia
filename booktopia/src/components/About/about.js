import React from 'react';
import {AboutContainer, Title, Paragraph} from './styledAbout';
export default function About(){
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <p>Welcome to our eBook website!</p>
      <Paragraph>
        We are dedicated to providing a vast collection of eBooks covering various genres
        and subjects. Whether you're into fiction, non-fiction, self-help, or academic
        literature, you'll find something of interest here.
      </Paragraph>
      <Paragraph>
        Our mission is to promote reading and make valuable knowledge accessible to
        everyone. With our user-friendly interface and diverse selection, we aim to
        cater to the reading preferences of all our visitors.
      </Paragraph>
      <Paragraph>
        Thank you for choosing us as your reading companion. Happy reading!
      </Paragraph>
    </AboutContainer>
      
  )
}
