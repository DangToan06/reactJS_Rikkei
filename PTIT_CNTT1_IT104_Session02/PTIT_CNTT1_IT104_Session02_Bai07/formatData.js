const formatDate = (date) => {
  const newDate = new Date(date);

  let day = newDate.getDate();
  if (day <= 9) day = "0" + day;
  let month = newDate.getMonth() + 1;
  if (month <= 9) month = "0" + month;
  let year = newDate.getFullYear();

  return `${day}/${month}/${year}`;
};

export default formatDate;
