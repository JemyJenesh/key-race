import Game from "../../models/Game";
import getPlayerFromCookie from "../../utils/getPlayerFromCookie";

export default function Home({ game, player }) {
  return (
    <main>
      <h1>GAme: {game?._id}</h1>
      <h1>Player: {player?.name}</h1>
    </main>
  );
}

export async function getServerSideProps({ req, res, query }) {
  try {
    const player = await getPlayerFromCookie(req, res);

    const game = await Game.findById(query.id);

    if (!game) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: {
        game: JSON.parse(JSON.stringify(game)),
        player: JSON.parse(JSON.stringify(player)),
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { game: null },
    };
  }
}
