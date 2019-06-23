const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8546', null, {});

function isLocked() {
    web3.eth.getAccounts(function(err, accounts){
       if (err != null) {
          console.log(err)
          console.log(accounts.length )

       }
       else if (accounts.length === 0) {
          console.log('MetaMask is locked')
       }
       else {
          console.log('MetaMask is unlocked')
       }
    });
 }

 export default isLocked;