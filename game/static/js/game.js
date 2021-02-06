// Mine the Hash
// game.js
//
// Try every number you can till you mine a block of gold!
//
// Created by Nikolas Millier 02/05/2021
// Version 0.0.1



self.message = "Live Today, Love Tomorrow, Unite Forever";
self.salt = null;
self.nonce = null;
self.gold = 0;
self.wallet = 0;

// Create a random salt
function loadSalt() {
    self.salt = Math.floor(Math.random() * 100000);
}

// Update element with the id "hash"
function updateHashView(hash) {
    document.getElementById("hash").innerHTML = hash; 
}

// Append info on the mined block
function appendBlockMined(hash) {
    let blockMined = document.createElement('p');
    blockMined.textContent = "You mined the block of gold [" + hash + "] with the nonce [" + self.nonce 
                              + "] that contains " + self.gold + " oz of gold!";
    document.body.appendChild(blockMined);
}

// Verify if the hash begins with "0"
function verify(hash) {
    if (hash[0] === "0") {
        return true;
    }
    else {
        return false;
    }
}

// Update the amount in the wallet
function updateWallet() {
    self.wallet = self.wallet + self.gold;
    let message = "Wallet: " + self.wallet + " oz of gold";
    document.getElementById("wallet").innerHTML = message;
}

// Create a random reward
function reward() {
    do {
        self.gold = Math.floor(Math.random() * 10);
    }
    while (self.gold < 1);
}

// Change the style of the hash
function minedStyle() {
    document.getElementById("hash").style.color = "green";
}

// Reset the style of the hash
function resetStyle() {
    document.getElementById("hash").style.color = "black";
}

// If the hash is verify ==> create a reward, update the amount in the wallet,
// change the style of the hash, append info on the block, create a new salt
function next(hash) {
    if (verify(hash)) {
        reward();
        updateWallet();
        minedStyle();
        appendBlockMined(hash);
        loadSalt();
    }
}

// Source for the SHA256 function: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
// Encode the string with SHA-256
function SHA256(string) {

    async function digestString(string) {
      const stringEncoded = new TextEncoder().encode(string);
      const hash =  await crypto.subtle.digest("SHA-256", stringEncoded);
      const hashArray = Array.from(new Uint8Array(hash));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
      return hashHex;
    }
    
    // If the hash begins with "0" and the nonce is "OnLoad" ==> create a new salt, hash the message
    // Else, update the hash and try a next nonce
    const digestHex = digestString(string).then(function(result) {
        if (result[0] === "0" && self.nonce === "OnLoad") {
            loadSalt();
            SHA256(self.salt + self.message)
        }
        else {
            updateHashView(result);
            next(result);
        }
    });
}

// Run the SHA256 function
function loadSHA256() {

    if (self.nonce === "OnLoad") {
        loadSalt();
        SHA256(self.salt + self.message);
    }

    else {
        SHA256(self.salt + self.message + self.nonce);
    }
}

// When loading the page, run the SHA256 function
window.onload = function() {
    self.nonce = "OnLoad";
    loadSHA256();
};

// When the user click on the try button
function trying() {

    // Get data from DOM
    let nonce = document.getElementById('nonce').value;

    // Take the nonce that the user enter and store it
    // Reset the style of the hash and run the SHA256 function
    self.nonce = nonce;
    resetStyle();
    loadSHA256();
}

const button = document.querySelector('button');
button.addEventListener('click', trying);