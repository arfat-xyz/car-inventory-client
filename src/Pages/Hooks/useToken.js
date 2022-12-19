import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email;

      if (email) {
        const { data } = await axios.post(
          "https://car-inventory-server.onrender.com/login",
          {
            email,
          }
        );
        setToken(data.token);
        console.log(data);
        localStorage.setItem("accesstoken", data.token);
      }
    };
    getToken();
  }, [user]);
  return [token];
};
export default useToken;
