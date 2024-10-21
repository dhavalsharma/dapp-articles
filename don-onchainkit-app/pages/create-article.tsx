"use client"

import React from 'react';
import { Wallet, JsonRpcProvider, Contract } from 'ethers';
import { useRouter } from 'next/router';
import DonationABI from '../artifacts/DonationaModule#Donation.json'; // Updated import
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const donationContractAddress = process.env.NEXT_PUBLIC_DONATION_CONTRACT_ADDRESS;

const CreateArticle = () => {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    const provider = new JsonRpcProvider(process.env.NEXT_PUBLIC_INFURA_URL);
    const signer = await provider.getSigner();
    const donationContract = new Contract(donationContractAddress, DonationABI.abi, signer);


    try {
      const tx = await donationContract.uploadArticle(title, content);
      await tx.wait();
      alert('Article published successfully!');
      router.push('/articles');
    } catch (error) {
      console.error(error);
      alert('Failed to publish article.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create Article
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            name="title"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Content"
            name="content"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default CreateArticle;