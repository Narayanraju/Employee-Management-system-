import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalstroage, setLocalstroage } from "./utils/LocalStorage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

// function App() {
//   const [User, setUser] = useState(null);
//   const [loggedInUserData, setLoggedInUserData] = useState(null);
//   const [userData, setUserData] = useContext(AuthContext);

// useEffect(() => {
//   if (authData) {
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     if (loggedInUser) {
//       setUser(loggedInUser.role);
//     }
//   }
// }, [authData]);

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("loggedInUser");

//     if (loggedInUser) {
//       const userData = JSON.parse(loggedInUser);
//       setUser(userData.role);
//       setLoggedInUserData(userData.data);
//     }
//   }, []);

//   const HandleLogin = (email, password) => {
//     if (email == "admin@main.com" && password == 123) {
//       setUser({ role: "admin" });
//       localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
//     } else if (userData) {
//       const employee = userData.employees.find(
//         (e) => email == e.email && e.password == password
//       );

//       if (employee) {
//         // setUser({ role: "employees" });
//         setUser({ role: "employee" });

//         setLoggedInUserData(employee);
//       }

//       localStorage.setItem(
//         "loggedInUser",
//         JSON.stringify({ role: "employees", data: employee })
//       );
//     } else {
//       alert("Wrong Infromation");
//     }
//   };

//   return (
//     <>
//       {/* {!User ? <Login HandleLogin={HandleLogin} /> : ""}
//       {User == "admin" ? (
//         <AdminDashboard />
//       ) : User == "employee" ? (
//         <EmployeeDashboard data={loggedInUserData} />
//       ) : null} */}
//       {!User && <Login HandleLogin={HandleLogin} />}
//       {User?.role === "admin" && <AdminDashboard changeUser={setUser} />}
//       {User?.role === "employee" && (
//         <EmployeeDashboard data={loggedInUserData} changeUser={setUser} />
//       )}
//     </>
//   );
// }

// export default App;

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, SetUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const HandleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login HandleLogin={HandleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
