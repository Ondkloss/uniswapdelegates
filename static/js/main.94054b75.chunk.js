(this.webpackJsonpuniswapdelegates=this.webpackJsonpuniswapdelegates||[]).push([[0],{162:function(e,t,n){},275:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"minter_","type":"address"},{"internalType":"uint256","name":"mintingAllowedAfter_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"address","name":"newMinter","type":"address"}],"name":"MinterChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint96","name":"votes","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimumTimeBetweenMints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mintCap","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mintingAllowedAfter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"minter_","type":"address"}],"name":"setMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rawAmount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},285:function(e,t,n){e.exports=n(593)},290:function(e,t,n){},303:function(e,t){},311:function(e,t){},329:function(e,t){},331:function(e,t){},347:function(e,t){},349:function(e,t){},424:function(e,t){},426:function(e,t){},435:function(e,t){},437:function(e,t){},466:function(e,t){},468:function(e,t){},475:function(e,t){},486:function(e,t){},593:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(20),i=n.n(r),o=(n(290),n(55)),l=n.n(o),u=n(268),c=n(33),d=n(269),p=n.n(d),y=n(95),m=n.n(y),f=n(631),b=n(634),h=n(22),v=(n(162),n(163)),w=function(e){return!!/^(0x)?[0-9a-f]{40}$/i.test(e)&&(!(!/^(0x)?[0-9a-f]{40}$/.test(e)&&!/^(0x)?[0-9A-F]{40}$/.test(e))||T(e))},T=function(e){e=e.replace("0x","");for(var t=Object(v.keccak256)(e.toLowerCase()),n=0;n<40;n++)if(parseInt(t[n],16)>7&&e[n].toUpperCase()!==e[n]||parseInt(t[n],16)<=7&&e[n].toLowerCase()!==e[n])return!1;return!0},E=function(e){var t=e/Math.pow(10,18),n=t/Math.pow(10,6),a=t/Math.pow(10,3);return n>=1?n.toFixed(2)+"M":a>=1?a.toFixed(2)+"K":t.toFixed(2)};var g=n(45),k=n(637),M=n(98),x=n.n(M);var C=function(e){var t=e.from,n=e.address,r=e.contract,i=Object(a.useState)(null),o=Object(c.a)(i,2),l=o[0],u=o[1],d=Object(a.useState)(0),p=Object(c.a)(d,2),y=p[0],m=p[1];return Object(a.useEffect)((function(){r.methods.delegates(n).call({from:t}).then((function(e){u(e)})),r.methods.balanceOf(n).call({from:t}).then((function(e){m(e)}))}),[]),s.a.createElement(f.a,{variant:"outlined",className:"innerdiv"},function(){if(l){var e=["The address is","itself"];return n===t&&(e=["You are","yourself"]),l.toLowerCase()===n.toLowerCase()?s.a.createElement("div",null,e[0]," delegating ",E(y)," UNI to ",s.a.createElement(k.a,{title:"Permalink"},s.a.createElement(g.b,{to:"/address/".concat(l)},e[1]," ",s.a.createElement(x.a,{fontSize:"inherit"})))):"0x0000000000000000000000000000000000000000"===l?s.a.createElement("div",null,e[0]," not delegating the ",E(y)," UNI"):s.a.createElement("div",null,e[0]," delegating ",E(y)," UNI to ",s.a.createElement(k.a,{title:"Permalink"},s.a.createElement(g.b,{to:"/address/".concat(l)},l," ",s.a.createElement(x.a,{fontSize:"inherit"}))))}return s.a.createElement("div",null,"Loading...")}())},O=n(636),A=n(633),S=n(632),j=n(123),N=n.n(j);function I(e){var t=e.severity,n=e.children,a=s.a.useState(!0),r=Object(c.a)(a,2),i=r[0],o=r[1];return s.a.createElement(S.a,{in:i,className:"alert"},s.a.createElement(O.a,{severity:t,action:s.a.createElement(A.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){o(!1)}},s.a.createElement(N.a,{fontSize:"inherit"}))},n))}var P=n(166),D=n.n(P),z=n(274),U=n.n(z);var B=function(e){var t=e.from,n=e.address,r=e.contract,i=e.showSnackbar,o=Object(a.useState)(0),l=Object(c.a)(o,2),u=l[0],d=l[1],p=w(n.address);return Object(a.useEffect)((function(){p&&r.methods.getCurrentVotes(n.address).call({from:t}).then((function(e){d(e)})).catch((function(e){console.error(e)}))}),[]),p?s.a.createElement(f.a,{variant:"outlined",className:"innerdiv relative"},n.link?s.a.createElement("div",null,"Alias: ",s.a.createElement(k.a,{title:"Alias source"},s.a.createElement("a",{href:n.link},n.alias," ",s.a.createElement(D.a,{fontSize:"inherit"})))):s.a.createElement("div",null,"Alias: ",n.alias),s.a.createElement("div",null,"Address: ",s.a.createElement(k.a,{title:"Permalink"},s.a.createElement(g.b,{to:"/address/".concat(n.address)},n.address," ",s.a.createElement(x.a,{fontSize:"inherit"}))),s.a.createElement(k.a,{title:"Etherscan"},s.a.createElement("a",{href:"https://etherscan.io/address/".concat(n.address)},s.a.createElement(D.a,{fontSize:"inherit",className:"spacingleft"}))),s.a.createElement(k.a,{title:"Copy to clipboard"},s.a.createElement(U.a,{onClick:function(e){!function(e){var t=document.createElement("textarea");t.style.position="fixed",t.style.top=0,t.style.left=0,t.style.width="2em",t.style.height="2em",t.style.padding=0,t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",t.value=e,document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(n){console.error(n)}document.body.removeChild(t)}(n.address),i()},fontSize:"inherit",className:"spacingleft pointer"}))),s.a.createElement("div",null,"Delegates: ",E(u))):s.a.createElement(f.a,{variant:"outlined",className:"innerdiv"},"Input ",n.address," is not a valid address.")},L=n(99),_=function(e){var t,n=e.from,a=e.contract,r=Object(h.g)().address,i=L.addresses.find((function(e){return e.address.toLowerCase()===r.toLowerCase()}));return t=i||{alias:"<Unknown>",address:r},s.a.createElement(s.a.Fragment,null,s.a.createElement(C,{from:n,address:t.address,contract:a}),s.a.createElement(B,{from:n,address:t,contract:a}))},F=n(635),H=function(){var e=Object(h.f)(),t=Object(a.useState)(""),n=Object(c.a)(t,2),r=n[0],i=n[1];return s.a.createElement("div",{className:"gotodiv"},s.a.createElement(F.a,{onKeyPress:function(t){"Enter"===t.key&&e.push("/address/".concat(t.target.value))},onChange:function(e){w(e.target.value)?i(""):i("Invalid address")},onClick:function(e){e.target.setSelectionRange(0,e.target.value.length)},id:"outlined-basic",label:"Address",variant:"outlined",error:r.length>0,helperText:r,fullWidth:!0}))},Y=n(275),G=n(638);function R(e){var t=e.open,n=e.setOpen,a=function(e,t){"clickaway"!==t&&n(!1)};return s.a.createElement("div",null,s.a.createElement(G.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:t,autoHideDuration:3e3,onClose:a,message:"Copied to clipboard",action:s.a.createElement(A.a,{size:"small","aria-label":"close",color:"inherit",onClick:a},s.a.createElement(N.a,{fontSize:"small"}))}))}var V=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(null),o=Object(c.a)(i,2),d=o[0],y=o[1],v=Object(a.useState)(1),w=Object(c.a)(v,2),T=w[0],E=w[1],g=Object(a.useState)(!1),k=Object(c.a)(g,2),M=k[0],x=k[1],O=p.a.givenProvider;Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O&&window.ethereum.request({method:"eth_accounts"}).then((function(e){A(e),E(window.ethereum.chainId),r(!0)})).catch((function(e){console.error(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var A=function(e){0===e.length?console.log("Please connect to MetaMask."):y(e[0])};window.ethereum&&(window.ethereum.autoRefreshOnNetworkChange=!1,window.ethereum.on("accountsChanged",A));var S,j=function(){window.ethereum.request({method:"eth_requestAccounts"}).then((function(e){A(e)})).catch((function(e){4001===e.code?console.log("Please connect to MetaMask."):console.error(e)}))};if(null==O)S=s.a.createElement(f.a,{variant:"outlined",className:"innerdiv"},"No Web3 provider found. Do you have MetaMask?");else if(n)if(d){m.a.setProvider(O);var N=new m.a(Y,L.uniswap);S=s.a.createElement(h.c,null,s.a.createElement(h.a,{path:"/address/:address"},s.a.createElement(_,{from:d,contract:N})),s.a.createElement(h.a,{path:"/"},function(e){return s.a.createElement(C,{from:d,address:d,contract:e})}(N),s.a.createElement(H,null),function(e){return L.addresses.map((function(t){return s.a.createElement(B,{key:t.address,from:d,address:t,contract:e,showSnackbar:function(){return x(!0)}})}))}(N)))}else S=s.a.createElement("div",{className:"buttondiv"},s.a.createElement(b.a,{variant:"contained",color:"primary",onClick:j},"Connect you account"));else S=s.a.createElement(f.a,{variant:"outlined",className:"innerdiv"},"Loading...");return s.a.createElement("div",{className:"outerdiv"},s.a.createElement(I,{severity:"warning"},"This is spaghetti code. Use at your own risk."),function(){var e=parseInt(T),t={1:"Ethereum Main Network",3:"Ropsten Test Network",4:"Rinkeby Test Network",5:"Goerli Test Network",42:"Kovan Test Network"};if(1!==e)return e in t?s.a.createElement(I,{severity:"info"},"You are on the ",t[e]):s.a.createElement(I,{severity:"info"},"You are not on the Ethereum Main Network")}(),S,s.a.createElement(I,{severity:"info"},"Go to ",s.a.createElement("a",{href:"https://app.uniswap.org/#/vote"},"Uniswap Vote")," to delegate your UNI."),s.a.createElement(I,{severity:"info"},"Check out ",s.a.createElement("a",{href:"https://explore.duneanalytics.com/dashboard/uniswap-governance"},"Dune Analytics Uniswap Governance dashboard")," for a more complete view."),s.a.createElement(I,{severity:"info"},"Check out the ",s.a.createElement("a",{href:"https://etherscan.io/address/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984#readContract"},"Uniswap contract on Etherscan")," to run the queries yourself."),s.a.createElement(R,{open:M,setOpen:x}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g.a,null,s.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e){e.exports=JSON.parse('{"uniswap":"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984","addresses":[{"alias":"yuni.finance","address":"0x1994b59E02Cd0d09D839b03660C205e88a929b81","link":"https://twitter.com/AndreCronjeTech/status/1308689084664213505"},{"alias":"Dharma","address":"0x7e4A8391C728fEd9069B2962699AB416628B19Fa","link":"https://gov.uniswap.org/t/proposal-excluded-proxy-contract-airdrop-phase-1/5811"},{"alias":"Gauntlet","address":"0x6626593c237f530d15ae9980a95ef938ac15c35c","link":"https://twitter.com/AndreCronjeTech/status/1308689086375497728"},{"alias":"<Unknown>","address":"0xf94e5cdf41247e268d4847c30a0dc2893b33e85d"},{"alias":"money-supply","address":"0x8d07d225a769b7af3a923481e1fdf49180e6a265","link":"https://gov.uniswap.org/t/delegate-to-monet-supply/1756"},{"alias":"Agust\xedn Aguilar","address":"0x47701463ee3a42fb87d24746fb9d8b70f06e6e3a","link":"https://twitter.com/Agusx1211/status/1307249998610997248"},{"alias":"andrecronje.eth","address":"0x2d407ddb06311396fe14d4b49da5f0471447d45c","link":"https://twitter.com/AndreCronjeTech/status/1308689086375497728"}]}')}},[[285,1,2]]]);
//# sourceMappingURL=main.94054b75.chunk.js.map