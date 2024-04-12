import React, { useState } from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 0rem;
  background-color: #FF1B68;
`;
const HeadingContainer = styled.div`
  margin-bottom: 60px; 
`;
const Heading = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  font-size: 64px;
  font-weight: bold;
  color: #000;
  line-height: 1.2; 
  margin: 0;
`;

const HeadingLine = styled.div`
  display: block;
  margin-bottom: -20px; 
`;

const Web3Email = styled.span`
  color: #fff;
`;

const Aleo = styled.span`
  text-decoration: underline;
  text-decoration-color: #fff;
  text-decoration-thickness: 5px;
  text-underline-offset: 8px;
`;
const Subheadline = styled.div`
font-family: 'Courier Prime', Courier, monospace;
font-size: 16px;
color: #560E26;
margin: 40px 0;  
line-height: 1.35;
`;

const BoldText = styled.span`
  font-weight: bold;
`;


const ComingSoon = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  color: #fff;
  letter-spacing: 0.28em;
  margin: 40px 0;
  line-height: 1.2;
`;

const EmailSignupForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
`;
const EmailInput = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 2px solid #560E26; 
  color: #560E26;
  background: ${props => props.disabled ? '#dddddd' : 'transparent'};
  outline: none;
  &::placeholder {
    color: ${props => props.disabled ? '#228B22' : '#560E26'};
  }
`;
const SubmitButton = styled.button`
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
  font-weight: bold;
  color: #560E26;
  background: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #d3d3d3; 
  }
`;
const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
   
    console.log(email);
    
    setTimeout(() => {
      setSubmitted(false);
      setEmail(''); 
    }, 3000); 
  };
  return (
    <HeroContainer>
      <div>
        <HeadingContainer>
          <Heading>
            <HeadingLine>Next gen <Web3Email>Web3 email</Web3Email></HeadingLine>
            <HeadingLine>service on <Aleo>Aleo</Aleo></HeadingLine>
          </Heading>
        </HeadingContainer>
        <Subheadline>
          <BoldText>MAILEO Network</BoldText> is a web3 email communication infrastructure built to provide<br/>
          encrypted emails service within Aleo network.
        </Subheadline>
        <ComingSoon>coming soon on Aleo.</ComingSoon>
        <EmailSignupForm onSubmit={handleSubmit}>
          <EmailInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={submitted ? "Form submitted successfully" : "Enter your email..."}
            disabled={submitted}
          />
          <SubmitButton type="submit" disabled={submitted}>Submit</SubmitButton>
        </EmailSignupForm>
      </div>
    </HeroContainer>
  );
};

export default Hero;
