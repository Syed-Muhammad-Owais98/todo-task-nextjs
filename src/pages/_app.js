import Navbar from "@/components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
