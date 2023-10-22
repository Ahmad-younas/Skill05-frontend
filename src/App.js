import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import RegisterPage from "./components/registerPage/RegisterPage";
import SigninPage from "./components/signinPage/SigninPage";
import Job from "./components/Jobs/Job";
import About from "./components/about/About";
import AdminDashboard from "./components/Admin/adminDashboard/AdminDashboard";
import AdminLogin from "./components/Admin/adminLogin/AdminLogin";
import PostJob from "./components/dashboard/postJob/PostJob";
import RecuriterDashboard from "./components/dashboard/recuriterDashboard/RecuriterDashboard";
import CompanyProfile from "./components/dashboard/companyProfile/CompanyProfile";
import { ProfileSetting } from "./components/dashboard/profileSetting/ProfileSetting";
import ForgetPassword from "./components/forgetPassword/ForgetPassword";
import { ResetPassword } from "./components/resetPassword/ResetPassword";
import RecuriterRegisterPage from "./components/recuriterRegisterPage/RecuriterRegisterPage";
import RecuriterSigninPage from "./components/recuriterSigninPage/RecuriterSigninPage";
import JobsApplicants from "./components/Admin/jobApplicants/JobsApplicants";
import ShortListCandidate from "./components/dashboard/shortListCandidate/ShortListCandidate";
import FinalCall from "./components/dashboard/finalCall/FinalCall";
import NotFound from "./components/notFound/NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/jobs" element={<Job />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/postJob" element={<PostJob />} />
      <Route path="/recuriterdasboard" element={<RecuriterDashboard />} />
      <Route path="/profile" element={<CompanyProfile />} />
      <Route path="/setting" element={<ProfileSetting />} />
      <Route path="/setting" element={<ProfileSetting />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/recuriterregister" element={<RecuriterRegisterPage />} />
      <Route path="/recuritersignin" element={<RecuriterSigninPage />} />
      <Route path="/jobapplicants" element={<JobsApplicants />} />
      <Route path="/allcandidate" element={<ShortListCandidate />} />
      <Route path="/shortlistedCandidate" element={<FinalCall />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
