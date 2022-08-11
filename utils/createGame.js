const createGame = async (player, setLoading) => {
  setLoading(true);

  const res = await fetch("/api/games/create", {
    method: "POST",
    body: JSON.stringify(player),
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const game = await res.json();

  setLoading(false);

  return game;
};

export default createGame;
