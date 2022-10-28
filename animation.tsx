import React from "react";
import ReactDom from "react-dom";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

import configs from "./config";

function importAll(r) {

  return r.keys().map(r);
}

/* @ts-ignore:next-line */
// console.log(require.context('./src/images/batch0/pre/', false, /\.(png|jpe?g|svg)$/).keys());


/* @ts-ignore:next-line */
const postImages = importAll(require.context('./src/images/batch0/post/', false, /\.(png|jpe?g|svg)$/));
/* @ts-ignore:next-line */
// const preImages = importAll(require.context('./src/images/batch0/pre/', false, /\.(png|jpe?g|svg)$/));

/* @ts-ignore:next-line */
const preContext = require.context('./src/images/batch0/pre/', false, /\.(png|jpe?g|svg)$/);

const preImagesImport2 = importAll(preContext)
const unbundledFiles = preContext.keys();

const preImages3 = [];
for (let i = 0; i < preImagesImport2.length; i++) {


  const matches = unbundledFiles[i].match(/.\/(\d*).jpg+/);

  /* @ts-ignore:next-line */
  preImages3[i] = {
    input: unbundledFiles[i],
    output: preImagesImport2[i],
    num: parseInt(matches[1])
  }
}

/* @ts-ignore:next-line */
console.log(preImages3.sort((a, b) => a.num - b.num))



// http://localhost:8080/?nftid=0

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};

// console.log(preImages);

document.addEventListener("DOMContentLoaded", async (event) => {
  /* @ts-ignore:next-line */
  var nftid: number = parseInt(getUrlParameter('nftid'));
  const sdk = new ThirdwebSDK(configs.chain.network);
  const contract = await sdk.getContract(configs.contractAddress);
  const isRedeemable = await contract.call("isRedeemable", nftid);

  // console.log(preImages)


  if (isRedeemable) {
    /* @ts-ignore:next-line */
    const f = preImages3[nftid].output

    ReactDom.render(<>
      <img src={f} />
    </>, document.getElementById('root'));
  } else {
    ReactDom.render(<>
      <img src={postImages[nftid]} />
    </>, document.getElementById('root'));
  }
})