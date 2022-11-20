import '../styles/globals.css';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

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
