import { FlagOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";

const Welcome = () => (
  <Result
    icon={<FlagOutlined />}
    title="Welcome to Key Race"
    extra={<Button type="primary">Play with friends</Button>}
  />
);

export default Welcome;
