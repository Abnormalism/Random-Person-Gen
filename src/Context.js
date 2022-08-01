import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [title, setTitle] = useState(null);
  const [name, setName] = useState("name");
  const [loading, setLoading] = useState(true);
  const [placeHolder, setPlaceHolder] = useState("");
  const [image, setImage] = useState();

  const url = "https://randomuser.me/api/";
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results[0];
    const {
      name: { first, last },
    } = results;
    const { gender } = results;
    const {
      location: { city, country },
    } = results;
    const {
      email,
      login: { password },
    } = results;
    const {
      picture: { large },
    } = results;
    const newResults = {
      name: `${first} ${last}`,
      email,
      gender,
      state: `${city}, ${country}`,
      password,
      large,
    };
    setTitle(newResults);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        title,
        name,
        setName,
        loading,
        placeHolder,
        setPlaceHolder,
        fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
