import { Route, Routes } from "react-router-dom";
import { Layout } from "src/components/organisms";
import Login from "src/pages/login";
import SignUp from "src/pages/sign-up";
import Profile from "src/pages/profile";
import EditProfile from "src/pages/edit-profile";
import TwoFA from "src/pages/two-fa";
import ChatUsers from "src/pages/chat-users";
import Chat from "src/pages/chat";
import RequireAuth from "./pages/auth";

const RouteLists = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/two-fa" element={<TwoFA />}></Route>

        <Route element={<RequireAuth />}>
          <Route path="/" element={<ChatUsers />}></Route>
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="/chat/:id" element={<Chat />}></Route>
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="/edit-profile" element={<EditProfile />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default RouteLists;
