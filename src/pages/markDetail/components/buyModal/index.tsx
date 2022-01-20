import { Modal, Form, Input, InputNumber, Switch, Select } from "antd";
import { isFunction } from "lodash";
import React from "react";

interface BuyModalProps {
  visible: boolean;
  handleOk: any;
  handleCancel: any;
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const BuyModal = (props: BuyModalProps) => {
  const { visible, handleOk, handleCancel } = props;
  const [form] = Form.useForm();
  const { validateFields } = form;
  const handleSelfOk = () => {
    isFunction(handleOk) && handleOk();
  };
  return (
    <Modal title="Buy Now" visible={visible} onOk={handleSelfOk} onCancel={handleCancel} maskClosable={false}>
      <Form
        {...layout}
        form={form}
        name="certification"
        // initialValues={initialValues}
      >
        <Form.Item label="Price" name="price" rules={[{ required: true, message: `please input number` }]}>
          <InputNumber style={{ width: 300 }} addonAfter="$" defaultValue={100} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BuyModal;
