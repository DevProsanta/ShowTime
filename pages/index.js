import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import resquests from "../utils/resquests";
import ItemList from "../components/ItemList";

export default function Home({results}) {

  return (
    <div>
      <Head>
        <title>ShowTime</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <ItemList results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${resquests[genre]?.url ||
      resquests.fetchTrending.url
    }`
  ).then((res) => res.json());

    console.log(request)
  return {
    props:{
      results: request.results,
    }
  }
}
