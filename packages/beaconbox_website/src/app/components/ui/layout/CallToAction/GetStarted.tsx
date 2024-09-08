'use client';

import React from 'react';
import styled from '@emotion/styled';
import { SignIn } from '../CallToAction'; // Import if you need it elsewhere, but not needed here

const Section = styled.section`
  padding: 40px 20px;
  text-align: center;
  background: #f8f9fa;
`;

const Heading = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
  color: #555;
`;

const Button = styled.a`
  display: inline-block;
  padding: 15px 30px;
  font-size: 1em;
  color: #fff;
  background: #0070f3;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

const CTASection = () => {
  return (
    <Section>
      <Heading>Ready to Get Started?</Heading>
      <Description>
        Don’t miss out on transforming your experience with our service. Join thousands of satisfied users who are already benefiting from our solution.
      </Description>
      <a href="/">
        <Button>Get Started</Button>
      </a>
    </Section>
  );
};

export default CTASection;
