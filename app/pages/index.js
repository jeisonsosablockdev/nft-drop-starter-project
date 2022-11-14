import React, { useEffect } from "react";

// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import dynamic from 'next/dynamic';
import { useWallet } from "@solana/wallet-adapter-react";

// Constants

const WalletMultiButton = dynamic(
    async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
);

const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Home = () => {

    const wallet = useWallet();

    useEffect (() => {
        console.log(wallet)
    }, [wallet]);

    const renderNotConnectedContainer = () => (

        <div>
            <img src="https://media.giphy.com/media/HZpCCbcWc0a3u/giphy.gif" alt="emoji" />
            <div className="button-container">
                <WalletMultiButton className="cta-button connect-wallet-button" />
            </div>
        </div>
    );

    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">🍭 Candy Drop</p>
                    <p className="sub-text">NFT drop machine with fair mint</p>
                    {wallet.publicKey ? "Tu wallet esta conectada" : renderNotConnectedContainer()}
                </div>
                {/* <div className="footer-container">
                    <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
                    <a className="footer-text" href={TWITTER_LINK} target="_blank" rel="noreferrer">{`built on @${TWITTER_HANDLE}`}</a>
                </div> */}
            </div>
        </div>
    );
};

export default Home;
