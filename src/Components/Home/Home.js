import logo from "../../assets/logo.png";
import Sidebar from "../Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <img src={logo} alt="logo" />
    </>
  );
}
