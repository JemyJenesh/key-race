import { useContext, useState } from "react";
import { Input, Modal, Form } from "antd";
import { appContext } from "../utils/store";
import createPlayer from "../utils/createPlayer";
import createGame from "../utils/createGame";
import { useRouter } from "next/router";

const PlayerForm = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const { showForm, closeForm } = useContext(appContext);

  const handleSubmit = async (values) => {
    const player = await createPlayer(values.name, setLoading);

    const game = await createGame(player, setLoading);

    router.push(`/games/${game._id}`);

    closeForm();
  };

  return (
    <Modal
      title="Create your profile"
      visible={showForm}
      onOk={form.submit}
      onCancel={closeForm}
      okText={"Create"}
      closable={false}
      maskClosable={false}
      destroyOnClose
      okButtonProps={{ loading }}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PlayerForm;
