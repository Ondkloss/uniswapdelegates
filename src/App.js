import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import Contract from 'web3-eth-contract'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import {
  Switch,
  Route,
} from 'react-router-dom'
import ExternalLinkIcon from '@material-ui/icons/Launch'
import LockIcon from '@material-ui/icons/Lock'
import ConnectIcon from '@material-ui/icons/SettingsInputComponent'
import './App.css'
import SelfDelegate from './SelfDelegate'
import TransitionAlert from './TransitionAlert'
import AddressWrapper from './AddressWrapper'
import AddressList from './AddressList'
import GoToAddress from './GoToAddress'
import Store from './store.json'
import UniswapAbi from './uniswapabi.json'
import SimpleSnackbar from './SimpleSnackbar'

function App() {
  const [loaded, setLoaded] = useState(false)
  const [account, setAccount] = useState(null)
  const [chain, setChain] = useState(1)
  const [open, setOpen] = useState(false)
  const infuraProvider = new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${Store.infura}`)
  const givenProvider = Web3.givenProvider

  useEffect(() => {
    const enable = async () => {
      if (givenProvider) {
        window.ethereum
          .request({ method: 'eth_accounts' })
          .then(accounts => {
            handleAccounts(accounts)
            setChain(window.ethereum.chainId)
            setLoaded(true)
          })
          .catch((err) => {
            console.error(err)
          })
      }
      else {
        setLoaded(true)
      }
    }
    enable()
  }, [])


  const handleAccounts = (accounts) => {
    if (accounts.length === 0) {
      console.log('Please connect to MetaMask.')
    }
    else {
      setAccount(accounts[0])
    }
  }

  if (window.ethereum) {
    window.ethereum.autoRefreshOnNetworkChange = false
    window.ethereum.on('accountsChanged', handleAccounts)
  }

  const connect = () => {
    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        handleAccounts(accounts)
      })
      .catch((err) => {
        if (err.code === 4001) {
          console.log('Please connect to MetaMask.')
        } else {
          console.error(err)
        }
      })
  }

  const getLoadingElement = () => <CircularProgress />

  const getNoAccountElement = () => <div className="buttondiv">
    <Button variant="outlined" color="primary" onClick={connect} startIcon={<ConnectIcon fontSize="inherit" color="primary" />}>Connect you account</Button>
  </div>

  const getProviderElement = (contract) => <AddressList list={Store.addresses} from={account} contract={contract} showSnackbar={() => setOpen(true)} />

  const getChainWarningElement = () => {
    const id = parseInt(chain)

    const networks = {
      1: 'Ethereum Main Network',
      3: 'Ropsten Test Network',
      4: 'Rinkeby Test Network',
      5: 'Goerli Test Network',
      42: 'Kovan Test Network'
    }

    if (id !== 1 && getProvider() === givenProvider) {
      if (id in networks) {
        return <TransitionAlert severity="info">You are on the {networks[id]}</TransitionAlert>
      }
      else {
        return <TransitionAlert severity="info">You are not on the Ethereum Main Network</TransitionAlert>
      }
    }
  }

  const getProvider = () => {
    if (account) {
      return givenProvider
    }
    else {
      return infuraProvider
    }
  }

  const getConnectorElement = (contract) => {
    if(account) {
      return getSelfDelegateElement(contract)
    }
    else {
      if(givenProvider) {
        return getNoAccountElement()
      }
    }
  }

  const getSpaghettiElement = () => <TransitionAlert severity="warning">This is spaghetti code. Use at your own risk.</TransitionAlert>

  const getSelfDelegateElement = (contract) => <SelfDelegate from={account} address={account} contract={contract} />

  const getDuneAnalyticsElement = () => <TransitionAlert severity="info">Check out <a href="https://explore.duneanalytics.com/dashboard/uniswap-governance">Dune Analytics Uniswap Governance dashboard <ExternalLinkIcon fontSize="inherit" /><LockIcon fontSize="inherit" /></a> for a more complete view.</TransitionAlert>

  const getUniswapVoteElement = () => <TransitionAlert severity="info">Go to <a href="https://app.uniswap.org/#/vote">Uniswap Vote <ExternalLinkIcon fontSize="inherit" /></a> to delegate your UNI.</TransitionAlert>

  const getEtherScanContractElement = () => <TransitionAlert severity="info">Check out the <a href="https://etherscan.io/address/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984#readContract">Uniswap contract on Etherscan <ExternalLinkIcon fontSize="inherit" /></a> to run the queries yourself.</TransitionAlert>

  const getCreditsElement = () => <TransitionAlert severity="info">Unicorn icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik <ExternalLinkIcon fontSize="inherit" /></a> from <a href="https://www.flaticon.com/" title="Flaticon">Flaticon <ExternalLinkIcon fontSize="inherit" /></a>.</TransitionAlert>

  let content

  if (!loaded) {
    content = getLoadingElement()
  }
  else {
    Contract.setProvider(getProvider())
    const contract = new Contract(UniswapAbi, Store.uniswap)

    content = <Switch>
      <Route path="/address/:address">
        <AddressWrapper from={account} contract={contract} showSnackbar={() => setOpen(true)} />
      </Route>
      <Route path="/">
        {getConnectorElement(contract)}
        <GoToAddress />
        {getProviderElement(contract)}
      </Route>
    </Switch>
  }

  return (
    <div className="outerdiv">
      {getSpaghettiElement()}
      {getChainWarningElement()}
      {content}
      {getUniswapVoteElement()}
      {getDuneAnalyticsElement()}
      {getEtherScanContractElement()}
      {getCreditsElement()}
      <SimpleSnackbar open={open} setOpen={setOpen} />
    </div>)
}

export default App
