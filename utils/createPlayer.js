const createPlayer = async (name, setLoading) => {
  setLoading(true);

  const res = await fetch("/api/players/create", {
    method: "POST",
    body: JSON.stringify({ name }),
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const player = await res.json();

  setLoading(false);

  return player;
};

export default createPlayer;
