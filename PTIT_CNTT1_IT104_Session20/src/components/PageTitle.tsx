import React, { useEffect, useState } from "react";

export default function PageTitle() {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (name) {
      document.title = `Chao, ${name}`;
    } else {
      document.title = `Trang web cua ban`;
    }
  }, [name]);

  return (
    <div className="page-title">
      <h2>Chào mừng bạn đến với trang của chúng tôi!</h2>
      <input
        type="text"
        placeholder="Nhập tên của bạn..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Tiêu đề trang sẽ thay đổi dựa trên tên bạn nhập.</p>
    </div>
  );
}
