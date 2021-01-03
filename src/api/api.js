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
    console.log(response);

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
