import { useEffect, useState } from "react";
import Customer from "./customer";
import SupportUser from "./support-user";

const ChatUsers = () => {
  const [userRole, setUserRole] = useState(1);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const { role } = JSON.parse(user);
      setUserRole(role);
    }
  }, []);
  if (userRole === 1) {
    return <Customer />;
  } else {
    return <SupportUser />;
  }
};

export default ChatUsers;
