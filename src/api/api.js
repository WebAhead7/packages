import axios from "axios";

import { setItemLocal, getItemLocal } from "../hooks/localStorage";

const owner = {
  owner: {
    role: "owner",
    _id: "5ff19d2a0c8b39129496dd78",
    firstname: "omklthom",
    lastname: "amara",
    phone: 113134,
    mobile: 1112323,
    email: "omklthom@gmail.com",
    password: "$2b$10$CftL1NZFMaR03jxXU2Hqa.z1EYt6t0VfYQtFMsZOgx2m/wejiKuFC",
    idImage: "",
    address: {
      _id: "5ff19d2a0c8b39129496dd79",
      city: "Tamra",
      street: "Almuhdi",
      building: "A75",
      apartment: "b7",
      specificAddress: "above the bove",
      longitude: "35.87545",
      latitude: "32.95424",
    },
    payment: {
      _id: "5ff19d2a0c8b39129496dd7a",
      creditNo: 4521659878451346,
      expDate: "07/26",
      cvv: 755,
      createdAt: "2021-01-03T10:32:10.342Z",
      updatedAt: "2021-01-03T10:32:10.342Z",
    },
    createdAt: "2021-01-03T10:32:10.343Z",
    updatedAt: "2021-01-03T10:32:10.343Z",
    __v: 0,
  },
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvd25lciI6eyJyb2xlIjoib3duZXIiLCJfaWQiOiI1ZmYxOWQyYTBjOGIzOTEyOTQ5NmRkNzgiLCJmaXJzdG5hbWUiOiJvbWtsdGhvbSIsImxhc3RuYW1lIjoiYW1hcmEiLCJwaG9uZSI6MTEzMTM0LCJtb2JpbGUiOjExMTIzMjMsImVtYWlsIjoib21rbHRob21AZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkQ2Z0TDFOWkZNYVIwM2p4WFUySHFhLnoxRVl0NnQwVmZZUXRGTXNaT2d4Mm0vd2VqaUt1RkMiLCJpZEltYWdlIjoiIiwiYWRkcmVzcyI6eyJfaWQiOiI1ZmYxOWQyYTBjOGIzOTEyOTQ5NmRkNzkiLCJjaXR5IjoiVGFtcmEiLCJzdHJlZXQiOiJBbG11aGRpIiwiYnVpbGRpbmciOiJBNzUiLCJhcGFydG1lbnQiOiJiNyIsInNwZWNpZmljQWRkcmVzcyI6ImFib3ZlIHRoZSBib3ZlIiwibG9uZ2l0dWRlIjoiMzUuODc1NDUiLCJsYXRpdHVkZSI6IjMyLjk1NDI0In0sInBheW1lbnQiOnsiX2lkIjoiNWZmMTlkMmEwYzhiMzkxMjk0OTZkZDdhIiwiY3JlZGl0Tm8iOjQ1MjE2NTk4Nzg0NTEzNDYsImV4cERhdGUiOiIwNy8yNiIsImN2diI6NzU1LCJjcmVhdGVkQXQiOiIyMDIxLTAxLTAzVDEwOjMyOjEwLjM0MloiLCJ1cGRhdGVkQXQiOiIyMDIxLTAxLTAzVDEwOjMyOjEwLjM0MloifSwiY3JlYXRlZEF0IjoiMjAyMS0wMS0wM1QxMDozMjoxMC4zNDNaIiwidXBkYXRlZEF0IjoiMjAyMS0wMS0wM1QxMDozMjoxMC4zNDNaIiwiX192IjowfSwiaWF0IjoxNjA5NjY5OTMwfQ.v7pTbtbh1EcCwKeQ5vZnuK84lO5bCKIaPXy9-HC9cN8",
};

window.localStorage.setItem("owner", JSON.stringify(owner));
const data = JSON.parse(window.localStorage.getItem("owner"));
const local = "http://localhost:4000";

export const addBusiness = async (values) => {
  const response = await fetch(`${local}/business`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${data.accessToken}`,
      body: JSON.stringify(values),
    },
  });
  const res = await response.json();
  console.log("helpp", res);
  console.log("help22", values);
};

export const getAllPackages = async (setPackages) => {
  try {
    const response = await fetch(`${local}/package/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${data.accessToken}`,
      },
      body: JSON.stringify(values),
    });

    const res = await response.json();

    setPackages(res);
  } catch (err) {
    console.log(err);
  }
};

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
