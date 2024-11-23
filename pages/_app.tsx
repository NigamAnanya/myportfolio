import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-700 dark:bg-white text-white dark:text-black">
      <Navbar />
      <main className="flex flex-col items-center p-6">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
