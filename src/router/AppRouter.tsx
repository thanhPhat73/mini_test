import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "../pages/UserList";
import UserForm from "../pages/UserForm";
import UserDetail from "../pages/UserDetail";
import ErrorPage from "../pages/ErrorPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { UserProvider } from "../UserProvider";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <UserProvider>
        <Routes>
          <Route index element={<UserForm />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </UserProvider>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
