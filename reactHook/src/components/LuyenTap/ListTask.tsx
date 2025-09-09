import { DeleteFilled, EditOutlined } from "@ant-design/icons";
import { Checkbox, List, type CheckboxProps } from "antd";

type PropType = {
  data: string[];

  handleOpenUpdate: (task: string) => void;
  handleOpenDelete: (task: string) => void;
};

export default function ListTask({
  data,
  handleOpenUpdate,
  handleOpenDelete,
}: PropType) {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="justify-center flex mt-5">
      <div className="w-[700px] ">
        <List
          size="large"
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <div className="flex justify-between w-[700px]">
                <div>
                  <Checkbox onChange={onChange}></Checkbox> <span>{item}</span>
                </div>
                <div className="flex gap-4">
                  <EditOutlined
                    className="cursor-pointer"
                    style={{ fontSize: "25px", color: "orange" }}
                    onClick={() => {
                      handleOpenUpdate(item);
                    }}
                  />
                  <DeleteFilled
                    className="cursor-pointer"
                    style={{ fontSize: "25px", color: "red" }}
                    onClick={() => {
                      handleOpenDelete(item);
                    }}
                  />
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
