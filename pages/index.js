import { Badge } from "antd";
import Head from "next/head";
import Welcome from "../components/Welcome";
import getPlayerFromCookie from "../utils/getPlayerFromCookie";

export default function Home({ isConnected, player }) {
  return (
    <div>
      <Head>
        <title>Key Race</title>
        <meta name="description" content="A clone of TypeRacer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Badge
          color={isConnected ? "green" : "red"}
          style={{ position: "fixed", right: 0 }}
        />

        <Welcome player={player} />
      </main>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  try {
    const player = await getPlayerFromCookie(req, res);

    return {
      props: { isConnected: true, player: JSON.parse(JSON.stringify(player)) },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false, player: null },
    };
  }
}
