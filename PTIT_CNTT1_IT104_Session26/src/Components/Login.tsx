import { Button, Card, Form, Input, Typography, Select } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Option } = Select;

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (value: {
    email: string;
    password: string;
    role: string;
  }) => {
    localStorage.setItem(
      "isLogin",
      JSON.stringify({ ...value, isLogin: true })
    );
    navigate("/account");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <Card
        style={{
          width: 400,
          borderRadius: 10,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Title level={3} style={{ textAlign: "center" }}>
          Login account
        </Title>

        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Your email"
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please enter your email!",
              },
            ]}
          >
            <Input placeholder="name@company.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
          >
            <Input.Password placeholder="******" />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please select your role!" }]}
          >
            <Select placeholder="---Chọn quyền---">
              <Option value="admin">Admin</Option>
              <Option value="user">User</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login an account
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
