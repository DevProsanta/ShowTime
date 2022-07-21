import Image from "next/image";
import React from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  return (
    <>
      {!loading ? (
          <Component {...pageProps} />
      ) : (
        <div className="flex justify-center w-full h-[100vh] items-center bg-[#FFFEFF]">
          <Image
            src="/showtimeg.gif"
            width="500"
            height="500"
            alt="loading."
            priority={true}
          ></Image>
        </div>
      )}
    </>
  );
}

export default MyApp;
