import axios from "axios";

export const useLogin = async (loginInfo, setAuth) => {
  const options = {
    method: "POST",
    url: "http://localhost:4000/owner/login",
    headers: { "Content-Type": "application/json" },
    data: { loginInfo },
  };

  try {
    const res = await fetch(options.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(loginInfo),
    });

    const response = await res.json();

    setAuth({
      isAuth: true,
      error: null,
      token: res.accessToken,
    });

    console.log(response);
  } catch (e) {
    setAuth({
      isAuth: false,
      error: e.message,
      token: null,
    });
  }
};
