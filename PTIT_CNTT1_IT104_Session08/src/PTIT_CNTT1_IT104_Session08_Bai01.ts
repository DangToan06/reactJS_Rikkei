enum WeekDays {
  MONDAY = "Thứ Hai",
  TUESDAY = "Thứ Ba",
  WEDNESDAY = "Thứ Tư",
  THURSDAY = "Thứ Năm",
  FRIDAY = "Thứ Sáu",
  SATURDAY = "Thứ Bảy",
  SUNDAY = "Chủ Nhật",
}

Object.keys(WeekDays).forEach((value) => {
  console.log(`${value}`);
});
