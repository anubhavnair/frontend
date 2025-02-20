import React from "react";

export const userDataContext = React.createContext();
const UserContext = ({ children }) => {
  const [userData, setUserData] = React.useState({
    fullname: {
      firstname: "Anubhav",
      lastname: "Nair",
    },
    email: "anubhavnair@gmail.com",
    password: "pasword",
  });
  return (
    <div>
      <userDataContext.Provider value={{ userData, setUserData }}>
        {children}
      </userDataContext.Provider>
    </div>
  );
};

export default UserContext;
