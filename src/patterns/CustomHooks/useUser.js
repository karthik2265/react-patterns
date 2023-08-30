import { useState, useEffect } from "react";

// fetch logged in user
export default function useUser() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSessionExpired, setSessionExpired] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // mimic api call and response
        const token = localStorage.getItem("access_token");
        const response = await fetch("https://my_app/api", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
          setIsLoading(false);
          setSessionExpired(false);
        } else if (response.status === 401) {
          setSessionExpired(true);
          setIsLoading(false);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.error("Error:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    user,
    isLoading,
    isSessionExpired,
  };
}
