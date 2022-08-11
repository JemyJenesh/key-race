import { FlagOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import { appContext } from "../utils/store";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import createGame from "../utils/createGame";

const Welcome = ({ player }) => {
  const router = useRouter();
  const { openForm } = useContext(appContext);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!player) {
      openForm();
    } else {
      const game = await createGame(player, setLoading);

      router.push(`/games/${game._id}`);
    }
  };

  return (
    <Result
      icon={<FlagOutlined />}
      title="Welcome to Key Race"
      subTitle={player ? `Hi, ${player.name}` : "Hi, there"}
      extra={
        <Button type="primary" onClick={handleClick} loading={loading}>
          Play with friends
        </Button>
      }
    />
  );
};

export default Welcome;
