import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  DollarOutlined,
  BarChartOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../hook/useRedux";
import { setMenu } from "../redux/slices/menu.slice";

const { Sider } = Layout;

export default function SidebarMenu() {
  const collapsed = useAppSelector((state) => state.menu.collapsed);
  const dispatch = useAppDispatch();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => dispatch(setMenu(value))}
        theme="dark"
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <DashboardOutlined />,
              label: "Bảng điều khiển",
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "Tài khoản",
            },
            {
              key: "3",
              icon: <DollarOutlined />,
              label: "Tài sản",
            },
            {
              key: "4",
              icon: <BarChartOutlined />,
              label: "Thống kê",
            },
            {
              key: "5",
              icon: <FileTextOutlined />,
              label: "Tài liệu",
            },
          ]}
        />
      </Sider>
    </Layout>
  );
}
