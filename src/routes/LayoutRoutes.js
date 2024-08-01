import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Layout from "../components/layout/Layout";
import UserActions from "../pages/users/userActions/UserActions";
import { Notification } from "../pages/notification/Notification";
import ProtectedRoutes from "./ProtectedRoutes";
import Users from "../pages/users/Users";
import Events from "../pages/events/Events";
import AdminPrompts from "../pages/dataManagement/prompts/AdminPrompts";
import AdminInterests from "../pages/dataManagement/interests/AdminInterests";
import AdminLanguage from "../pages/dataManagement/language/AdminLanguage";
import AdminCountries from "../pages/dataManagement/countries/AdminCountries";
import AddEvents from "../pages/events/addEvents/AddEvents";
import EditEvents from "../pages/events/addEvents/EditEvents";
import AdminCities from "../pages/dataManagement/cities/AdminCities";
import ManageCMS from "../pages/manageCMS/ManageCMS";
import ProfileSetting from "../pages/profile/ProfileSetting";
const LayoutRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<ProtectedRoutes />}>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/dashboard/notifications" element={<Notification />} />
          <Route path="/dashboard/profile" element={<ProfileSetting />} />
          <Route path="/users" element={<Users />} />
          <Route path="/events" element={<Events />} />
          <Route path="/users/actions" element={<UserActions />} />
          <Route path="/datamanagemet/prompts" element={<AdminPrompts />} />
          <Route path="/dashboard/managecms" element={<ManageCMS />} />
          <Route path="/datamanagemet/interest" element={<AdminInterests />} />
          <Route path="/datamanagemet/language" element={<AdminLanguage />} />
          <Route path="/datamanagemet/countries" element={<AdminCountries />} />
          <Route path="/datamanagemet/cities" element={<AdminCities />} />
          <Route path="/events/add-event" element={<AddEvents />} />
          <Route path="/events/edit/:id" element={<EditEvents />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default LayoutRoutes;
