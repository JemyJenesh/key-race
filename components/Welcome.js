import { FlagOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";
import { appContext } from "../utils/store";
import { useContext } from "react";

const Welcome = ({ player }) => {
  const { openForm } = useContext(appContext);

  const handleClick = () => {
    if (!player) {
      openForm();
    }
  };

  return (
    <Result
      icon={<FlagOutlined />}
      title="Welcome to Key Race"
      subTitle={player ? `Hi, ${player.name}` : "Hi, there"}
      extra={
        <Button type="primary" onClick={handleClick}>
          Play with friends
        </Button>
      }
    />
  );
};

export default Welcome;
