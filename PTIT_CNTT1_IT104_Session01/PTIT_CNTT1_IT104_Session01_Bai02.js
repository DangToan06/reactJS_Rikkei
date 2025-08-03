const a = 5;

const arr = [1, 2, 3];

a = 6;

arr.push(9);

//  a báo lỗi tại vì khi khai báo 1 biến const không thể cập nhật lại gia tri cho nó
// còn arr chạy được vì const chỉ không bảo vệ binding nhưng không bảo vệ dữ liệu bên trong nếu làm chiếu giống arry hoặc object
