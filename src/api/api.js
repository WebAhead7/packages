import axios from "axios";

import { setItemLocal, getItemLocal } from "../hooks/localStorage";

export const getOwnerProfile = async (setOwnerInfo, token) => {
  const options = {
    method: "GET",
    url: "http://localhost:4000/owner/profile",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await fetch(options.url, options);

    setOwnerInfo({
      isLoading: true,
      data: null,
    });

    const response = await res.json();

    setOwnerInfo({
      isLoading: false,
      data: response,
    });
  } catch (e) {
    setOwnerInfo({
      isLoading: false,
      data: null,
    });
  }
};

export const signUpApi = async (setAuth, data) => {
  const options = {
    method: "POST",
    url: "http://localhost:4000/owner/signup",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const res = await fetch(options.url, options);

    setAuth({
      isAuth: false,
      error: null,
      token: null,
      isLoading: true,
    });

    const response = await res.json();

    if (response.accessToken) {
      setAuth({
        isAuth: true,
        error: null,
        token: response.accessToken,
        isLoading: false,
      });

      setItemLocal("accessToken", response.accessToken);
    }
  } catch (e) {
    setAuth({
      isAuth: false,
      error: e.message,
      token: null,
      isLoading: false,
    });
  }
};
