import React, { useState, useEffect } from 'react';
import { JsonRpcProvider, Contract, parseEther } from 'ethers';
import DonationABI from '../artifacts/DonationaModule#Donation.json'; // Updated import
import { TextField, Button, Container, Typography, Card, CardContent, CardActions, Box, Stack } from '@mui/material';
import Link from 'next/link';

const donationContractAddress = process.env.NEXT_PUBLIC_DONATION_CONTRACT_ADDRESS;

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [donationAmounts, setDonationAmounts] = useState({});

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const provider = new JsonRpcProvider(process.env.NEXT_PUBLIC_INFURA_URL);
    const donationContract = new Contract(donationContractAddress, DonationABI.abi, provider);

    const articles = await donationContract.getArticles(); // Adjust this line based on your contract's method

    const formattedArticles = articles.map(article => ({
      id: article.id.toString(),
      title: article.title,
      content: article.content,
      donationsReceived: article.donationsReceived.toString(), // Convert bigint to string
    }));

    setArticles(formattedArticles);
  };

  const handleInputChange = (articleId, value) => {
    setDonationAmounts({
      ...donationAmounts,
      [articleId]: value,
    });
  };

  const handleDonate = async (articleId) => {
    const amount = donationAmounts[articleId];
    if (!amount) {
      alert('Please enter a donation amount.');
      return;
    }

    const provider = new JsonRpcProvider(process.env.NEXT_PUBLIC_INFURA_URL);
    const signer = await provider.getSigner();
    const donationContract = new Contract(donationContractAddress, DonationABI.abi, signer);

    try {
      const tx = await donationContract.donateToArticle(parseInt(articleId), { value: parseEther(amount) });
      await tx.wait();
      alert('Donation successful!');
      // Refresh articles
      fetchArticles();
    } catch (error) {

      console.error(error);
      alert('Failed to donate.');
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h1" gutterBottom>
        Articles
      </Typography>
      <Link href="/create-article" passHref>
        <Button variant="contained" color="secondary" style={{ marginBottom: '20px' }}>
          Create Article
        </Button>
      </Link>
      <Stack spacing={4}>
        {articles.map((article, index) => (
          <Box key={index} sx={{ width: '100%' }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.content}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Donations Received: {article.donationsReceived}
                </Typography>
              </CardContent>
              <CardActions>
                <TextField
                  type="number"
                  label="Enter amount"
                  value={donationAmounts[article.id] || ''}
                  onChange={(e) => handleInputChange(article.id, e.target.value)}
                  variant="outlined"
                  size="medium"
                  style={{ marginRight: '10px' }}
                />
                <Button variant="contained" color="primary" onClick={() => handleDonate(article.id)}>
                  Donate
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export async function getServerSideProps() {
  // Connect to Ethereum provider
  const provider = new JsonRpcProvider(process.env.NEXT_PUBLIC_INFURA_URL);
  const donationContract = new Contract(donationContractAddress, DonationABI.abi, provider);

  // Fetch articles from the contract
  const articles = await donationContract.getArticles(); // Adjust this line based on your contract's method

  // Convert articles to a format suitable for rendering
  const formattedArticles = articles.map(article => ({
    id: article.id.toString(),
    title: article.title,
    content: article.content,
    donationsReceived: article.donationsReceived.toString(), // Convert bigint to string
  }));

  return {
    props: {
      initialArticles: formattedArticles,
    },
  };
}

export default Articles;