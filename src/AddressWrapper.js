import React from 'react';
import { useParams } from 'react-router-dom';
import Address from './Address';
import SelfDelegate from './SelfDelegate';
import Store from './store.json';

const AddressWrapper = ({ from, contract }) => {
    const { address } = useParams();

    const found = Store.addresses.find(a => a.address.toLowerCase() === address.toLowerCase());
    let resultAddress;

    if (found) {
        resultAddress = found;
    }
    else {
        resultAddress = {
            alias: "<Unknown>",
            address: address
        }
    }

    return <>
        <SelfDelegate from={from} address={resultAddress.address} contract={contract} />
        <Address from={from} address={resultAddress} contract={contract} />
    </>
}

export default AddressWrapper;