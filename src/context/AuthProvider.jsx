import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [profile, setProfile] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("jwt");
        if (token) {
          const { data } = await axios.get(
            "https://blogappbackend-culv.onrender.com/api/users/my-profile",
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("Profile data fetched:", data);
          setProfile(data);
          setIsAuthenticated(true);
        } else {
          console.log("No token found in localStorage.");
        }
      } catch (error) {
        console.log("Error fetching profile:", error);
      }
    };

    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(
          "https://blogappbackend-culv.onrender.com/api/blogs/all-blogs",
          { withCredentials: true }
        );
        console.log("Blogs data fetched:", data);
        setBlogs(data);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      }
    };

    fetchProfile();
    fetchBlogs();
  }, []);

  // Log profile and blogs state after each update
  useEffect(() => {
    if (profile) {
      console.log("Updated profile:", profile);
    }
  }, [profile]);

  useEffect(() => {
    if (blogs.length > 0) {
      console.log("Updated blogs:", blogs);
    }
  }, [blogs]);

  return (
    <AuthContext.Provider
      value={{
        blogs,
        setBlogs,
        profile,
        setProfile,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
