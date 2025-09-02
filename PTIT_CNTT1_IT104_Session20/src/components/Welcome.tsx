import React, { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    console.log("Component được render lần đầu");
  }, []);

  return <div>Chào mừng bạn dến với ứng dụng của chúng tôi!</div>;
}
