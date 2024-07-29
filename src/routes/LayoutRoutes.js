import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Layout from "../components/layout/Layout";
import UserActions from "../pages/users/userActions/UserActions";
import { Notification } from "../pages/notification/Notification";
import { Profile } from "../pages/profile/Profile";
import ProtectedRoutes from "./ProtectedRoutes";
import { Setting } from "../pages/Setting/Setting";
import Users from "../pages/users/Users";
import Events from "../pages/events/Events";
import AdminPrompts from "../pages/dataManagement/prompts/AdminPrompts";
import AdminInterests from "../pages/dataManagement/interests/AdminInterests";
import AdminLanguage from "../pages/dataManagement/language/AdminLanguage";
import AdminCountries from "../pages/dataManagement/countries/AdminCountries";
import AddEvents from "../pages/events/addEvents/AddEvents";
const LayoutRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<ProtectedRoutes />}>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/dashboard/notifications" element={<Notification />} />
          <Route path="/dashboard/setting" element={<Setting />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/events" element={<Events />} />
          <Route path="/users/actions" element={<UserActions />} />
          <Route path="/datamanagemet/prompts" element={<AdminPrompts/>}/>
          <Route path="/datamanagemet/interest" element={<AdminInterests/>}/>
          <Route path="/datamanagemet/language" element={<AdminLanguage/>}/>
          <Route path="/datamanagemet/countries" element={<AdminCountries/>}/>
          <Route path="/events/add-event" element={<AddEvents/>}/>
        </Route>
      </Routes>
    </Layout>
  );
};

export default LayoutRoutes;
