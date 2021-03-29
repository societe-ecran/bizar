import React from "react";
import Navbar from "../components/navbar";

export default function Layout({ children }) {
  return (
    <div className='scrollBarColor'>
      <Navbar className="" />
      <main >{children}</main>
    </div>
  );
}
