
import Index from "views/Index.js";
import Login from "views/examples/Login.js";
import AppTables from "views/examples/AppTables.js";
import DoctorCreateProfile from "views/examples/DoctorCreateProfile";
import PatientTable from "views/examples/PatientTable";
import PatientCreateProfile from "views/examples/PatientCreateProfile";
import PatientProfile from "./views/examples/PatientProfile";
import AppProfile from "views/examples/AppointmentCreate";
import DoctorTable from "./views/examples/DoctorTable";
import DoctorSeeProfile from "views/examples/DoctorSeeProfile";
import ServiceCreate from "views/examples/ServiceCreate";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-circle-08",
    component: <Index />,
    layout: "/admin",
  },

  {
    path: "/Patients",
    name: "Patients",
    icon: "ni ni-ambulance",
    component: <PatientTable />,
    layout: "/admin",
  },


  
  // {
  //   path: "/CreateDoctor",
  //   name: "Create Doctor",
  //   icon: "ni ni-badge",
  //   component: <DoctorCreateProfile />,
  //   layout: "/admin",
  // },
  {
    path: "/Doctorslist",
    name: "Doctors",
    icon: "ni ni-badge",
    component: <DoctorTable />,
    layout: "/admin",
  },
  { path:"/Appointments",
    name: "Appointment",
    icon: "ni ni-calendar-grid-58",
    component: <AppTables />,
    layout: "/admin",
  },
  {
    path: "/Service",
    name: "Service",
    icon: "ni ni-money-coins",
    component: <ServiceCreate/>,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "",
    icon: "",
    component: <Login/>,
    layout: "/auth",
  },
  {
    path: "/PatientsCreate",
    component: <PatientCreateProfile type={"Create"} />,
    layout: "/admin",
  },
  {
    path: "/PatientsUpdate",
    component: <PatientCreateProfile type={"Update"} />,
    layout: "/admin",
  },
  {
    path: "/Patients/:id",
    component: <PatientProfile/>,
    layout: "/admin",
  },
  // {<Route path="/admin/Patients/:id" element={<PatientProfile/> }/> }


  { name: "",
    path: "/CreateAppointment",
    component: <AppProfile/>,
    layout: "/admin",},
    {
      path: "/Appointments",
      name: "",
      component: <AppTables/>,
      layout: "/admin",
    },
    {
      path: "/SeeDoctor/*",
      name: "",
      icon: "",
      component: <DoctorSeeProfile />,  //sheel el arraf da lama te32al we 3adel fe file index.js
      layout: "/admin",
    },

    {
      path: "/PatientsUpdate",
      path: "/PatientsUpdate/:Patient_id",
      component: <PatientCreateProfile type={"Update"} />,
      layout: "/admin",
      hidden: true  // Add this property
    },

      {
    path: "/CreateDoctor",
    name: "",
    icon: "",
    component: <DoctorCreateProfile />,
    layout: "/admin",
  },
 
];
export default routes;
