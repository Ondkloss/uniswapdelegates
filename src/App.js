import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import Contract from 'web3-eth-contract';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import SelfDelegate from './SelfDelegate';
import TransitionAlert from './TransitionAlert';
import AddressWrapper from './AddressWrapper';
import Address from './Address';
import GoToAddress from './GoToAddress';
import Store from './store.json';
import UniswapAbi from './uniswapabi.json';
import SimpleSnackbar from './SimpleSnackbar';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [account, setAccount] = useState(null);
  const [chain, setChain] = useState(1);
  const [open, setOpen] = useState(false);
  const provider = Web3.givenProvider;

  useEffect(() => {
    const enable = async () => {
      if (provider) {
        window.ethereum
          .request({ method: 'eth_accounts' })
          .then(accounts => {
            handleAccounts(accounts);
            setChain(window.ethereum.chainId);
            setLoaded(true);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
    enable();
  }, []);


  const handleAccounts = (accounts) => {
    if (accounts.length === 0) {
      console.log('Please connect to MetaMask.');
    }
    else {
      setAccount(accounts[0]);
    }
  };

  if (window.ethereum) {
    window.ethereum.autoRefreshOnNetworkChange = false;
    window.ethereum.on('accountsChanged', handleAccounts);
  }

  const connect = () => {
    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        handleAccounts(accounts);
      })
      .catch((err) => {
        if (err.code === 4001) {
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });
  }

  const getLoadingElement = () => <Paper variant="outlined" className="innerdiv">Loading...</Paper>;

  const getNoProviderElement = () => <Paper variant="outlined" className="innerdiv">No Web3 provider found. Do you have MetaMask?</Paper>;

  const getNoAccountElement = () => <div className="buttondiv">
    <Button variant="contained" color="primary" onClick={connect}>Connect you account</Button>
  </div>

  const getProviderElement = (contract) => Store.addresses.map(a => <Address key={a.address} from={account} address={a} contract={contract} showSnackbar={() => setOpen(true)} />);

  const getChainWarningElement = () => {
    const id = parseInt(chain);

    const networks = {
      1: 'Ethereum Main Network',
      3: 'Ropsten Test Network',
      4: 'Rinkeby Test Network',
      5: 'Goerli Test Network',
      42: 'Kovan Test Network'
    };

    if (id !== 1) {
      if (id in networks) {
        return <TransitionAlert severity="info">You are on the {networks[id]}</TransitionAlert>
      }
      else {
        return <TransitionAlert severity="info">You are not on the Ethereum Main Network</TransitionAlert>
      }
    }
  }

  const getSelfDelegateElement = (contract) => <SelfDelegate from={account} address={account} contract={contract} />

  const getDuneAnalyticsElement = () => <TransitionAlert severity="info">Check out <a href="https://explore.duneanalytics.com/dashboard/uniswap-governance">Dune Analytics Uniswap Governance dashboard</a> for a more complete view.</TransitionAlert>

  const getUniswapVoteElement = () => <TransitionAlert severity="info">Go to <a href="https://app.uniswap.org/#/vote">Uniswap Vote</a> to delegate your UNI.</TransitionAlert>

  const getEtherScanContractElement = () => <TransitionAlert severity="info">Check out the <a href="https://etherscan.io/address/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984#readContract">Uniswap contract on Etherscan</a> to run the queries yourself.</TransitionAlert>

  const getCreditsElement = () => <TransitionAlert severity="info">Favicon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a>.</TransitionAlert>

  let content;

  if (provider == null) {
    content = getNoProviderElement();
  }
  else if (!loaded) {
    content = getLoadingElement();
  }
  else if (!account) {
    content = getNoAccountElement();
  }
  else {
    Contract.setProvider(provider);
    const contract = new Contract(UniswapAbi, Store.uniswap);

    content = <Switch>
      <Route path="/address/:address">
        <AddressWrapper from={account} contract={contract} />
      </Route>
      <Route path="/">
        {getSelfDelegateElement(contract)}
        <GoToAddress />
        {getProviderElement(contract)}
      </Route>
    </Switch>;
  }

  return <div className="outerdiv">
    <TransitionAlert severity="warning">This is spaghetti code. Use at your own risk.</TransitionAlert>
    {getChainWarningElement()}
    {content}
    {getUniswapVoteElement()}
    {getDuneAnalyticsElement()}
    {getEtherScanContractElement()}
    {getCreditsElement()}
    <SimpleSnackbar open={open} setOpen={setOpen} />
  </div>
}

export default App;
