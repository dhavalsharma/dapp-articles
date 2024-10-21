import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

import {
    ConnectWallet,
    ConnectWalletText,
    Wallet,
    WalletDropdown,
    WalletDropdownLink,
    WalletDropdownDisconnect,
  } from '@coinbase/onchainkit/wallet';
    import {
        Address,
        Avatar,
        Name,
        Identity,
        EthBalance,
    } from '@coinbase/onchainkit/identity';


const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fund Articles
          </Typography>
          <Wallet>
            <ConnectWalletText>Connect Wallet</ConnectWalletText>
          </Wallet>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
    </>
  );
};

export default Layout;