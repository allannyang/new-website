import "../styles/globals.css";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import BGBubbles from "../components/BGBubbles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopBar></TopBar>
      <Component {...pageProps} />
      <BottomBar></BottomBar>
    </>
  );
}

export default MyApp;
