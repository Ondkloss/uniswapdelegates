import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import './App.css';

function Address({ from, address, contract }) {
    const [delegates, setDelegates] = useState(0);

    useEffect(() => {
        contract.methods.getCurrentVotes(address.address).call({ from })
            .then(result => {
                console.log(result);
                setDelegates(result);
            });
    }, []);

    const getDelegatesString = delegates => {
        const decimal = delegates / Math.pow(10, 18);
        const millions = decimal / Math.pow(10, 6);
        const thousands = decimal / Math.pow(10, 4);
        if (millions >= 1) {
            return millions.toFixed(2) + "M";
        }
        else if (thousands >= 1) {
            return thousands.toFixed(2) + "K";
        }
        else {
            return decimal.toFixed(2);
        }
    }

    const getAliasElement = (alias, link) => {
        if(link) {
            return <div>Alias: <a href={link}>{address.alias}</a></div>;
        }
        else {
            return <div>Alias: {address.alias}</div>;
        }
    }

    return <Paper variant="outlined" className="innerdiv">
        {getAliasElement(address.alias, address.link)}
        <div>Address: <a href={`https://etherscan.io/address/${address.address}`}>{address.address}</a></div>
        <div>Delegates: {getDelegatesString(delegates)}</div>
    </Paper>
}

export default Address;
