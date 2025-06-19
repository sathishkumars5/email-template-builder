import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export const handleLogout = async (navigate) => {
  try {
    await signOut(auth);
    sessionStorage.clear(); 
    navigate("/login");
  } catch (error) {
    console.error("Logout error:", error);
  }
};
