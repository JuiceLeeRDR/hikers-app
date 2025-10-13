import { createContext } from "react";

const defaultUser = {
  name: "",
  email: "",
  avatar: "",
  banner: "",
  _id: "",
};

const CurrentUserContext = createContext(defaultUser);

export default CurrentUserContext;
