// export const connectWallet = async () => {
//   console.log("1")
//     if (window.ethereum) {
//       try {
//         const addressArray = await window.ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         const obj = {
//           status: "👆🏽 Write a message in the text-field above.",
//           address: addressArray[0],
//         };
//         return obj;
//       } catch (err) {
//         return {
//           address: "",
//           status: "😥 " + err.message,
//         };
//       }
//     } 
//   };

export const connectWallet = async () => {
  console.log("1");
  if (window.ethereum) {
    try {
      // Set the network to the Polygon testnet (Mumbai) using the chain ID
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x13881" }],
      });

      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  }
};

  export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "👆🏽 Write a message in the text-field above.",
          };
        } else {
          return {
            address: "",
            status: "🦊 Connect to Metamask using the top right button.",
          };
        }
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } 
  };