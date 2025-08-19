import { HeaderTable } from "./ListAccount/HeaderTable";
import { BodyTable } from "./ListAccount/BodyTable";
import "../Style/ListAccount.css";

export const ListAccount = () => {
  return (
    <table>
      <HeaderTable></HeaderTable>
      <BodyTable></BodyTable>
    </table>
  );
};
