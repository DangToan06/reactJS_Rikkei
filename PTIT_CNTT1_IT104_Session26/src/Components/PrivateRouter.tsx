import React, { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IPrivateRouter {
  children: ReactNode;
}

interface IUser {
  email: string;
  password: string;
  role: string;
  isLogin: boolean;
}

export default function PrivateRouter({ children }: IPrivateRouter) {
  const [person] = useState<IUser>({
    email: "u@gmail.com",
    password: "1",
    role: "user",
    isLogin: true,
  });

  const dataLocal = localStorage.getItem("isLogin");
  const [status, setStatus] = useState<IUser | null>(null);

  useEffect(() => {
    if (dataLocal) {
      setStatus(JSON.parse(dataLocal));
    }
  }, []);

  if (status === null) return null;

  if (status?.isLogin) {
    if (status.email === person.email && person.password === status.password) {
      return children;
    } else {
      alert("Tai khoan mat khu khong hop le!!!");
      return <Navigate to="/login" replace />;
    }
  } else {
    return <Navigate to="/login" replace />;
  }
}
