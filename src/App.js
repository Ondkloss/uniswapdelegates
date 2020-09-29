import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import Contract from 'web3-eth-contract';
import Alert from '@material-ui/lab/Alert';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './App.css';
import Address from './Address'
import Store from './store.json';
import UniswapAbi from './uniswapabi.json'

function App() {
  const [loaded, setLoaded] = useState(false);
  const [account, setAccount] = useState(null);
  const [chain, setChain] = useState(1);
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
    window.ethereum.on('chainChanged', () => window.location.reload());
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

  const getNoAccountElement = () => <Button variant="contained" onClick={connect}>Connect you account</Button>

  const getProviderElement = (contract) => Store.addresses.map(a => <Address key={a.address} from={account} address={a} contract={contract} />);

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
        return <Alert severity="info" className="alert">You are on the {networks[id]}</Alert>
      }
      else {
        return <Alert severity="info" className="alert">You are not on the Ethereum Main Network</Alert>
      }
    }
  }

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
    content = getProviderElement(contract);
  }

  return <div className="outerdiv">
    <Alert severity="warning" className="alert">This is spaghetti code. Use at your own risk.</Alert>
    {getChainWarningElement()}
    {content}
  </div>
}

export default App;
