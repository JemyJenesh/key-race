import { useContext, useState } from "react";
import { Input, Modal, Form } from "antd";
import { appContext } from "../utils/store";

const PlayerForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const { showForm, closeForm } = useContext(appContext);

  const handleSubmit = async (values) => {
    setLoading(true);
    const res = await fetch("/api/players/create", {
      method: "POST",
      body: JSON.stringify(values),
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    await res.json();

    setLoading(false);

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
