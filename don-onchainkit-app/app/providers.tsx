'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { base } from 'wagmi/chains';
import { http, cookieStorage, createConfig, createStorage } from 'wagmi';
import { OnchainKitProvider } from '@coinbase/onchainkit';

import { type ReactNode, useState } from 'react';
import { type State, WagmiProvider } from 'wagmi';
import {
  RainbowKitProvider,
  connectorsForWallets,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  rainbowWallet,
  coinbaseWallet,
} from '@rainbow-me/rainbowkit/wallets';

import '@coinbase/onchainkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import Layout from '../components/Layout';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended Wallet',
      wallets: [coinbaseWallet],
    },
    {
      groupName: 'Other Wallets',
      wallets: [rainbowWallet, metaMaskWallet],
    },
  ],
  {
    appName: 'onchainkit',
    projectId: process.env.VITE_WALLET_CONNECT_PROJECT_ID || 'default_project_id',
  },
);

const config = createConfig({
  chains: [base],
  connectors,
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  transports: {
    [base.id]: http(),
  },
});

export function Providers(props: {
  children: ReactNode;
  initialState?: State;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config} initialState={props.initialState}>
      <QueryClientProvider client={queryClient}>

        <OnchainKitProvider
          apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_CDP_KEY}
          chain={base}
          config={{
            appearance: {
              mode: 'auto',
              theme: 'base',
            }
          }}
        >

          <RainbowKitProvider modalSize="compact">
            <Layout>{props.children}</Layout>

          </RainbowKitProvider>
        </OnchainKitProvider>


      </QueryClientProvider>
    </WagmiProvider>
  );
}
