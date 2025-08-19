export const FormatName = () => {
  interface User {
    firstName: string;
    lastName: string;
  }

  const user = {
    firstName: "Nguyễn Văn",
    lastName: "Nam",
  };

  const formatName = (user: User): string => {
    return user.lastName.concat(user.firstName);
  };

  return (
    <>
      <div>Ho va ten: {formatName(user)}</div>
    </>
  );
};
