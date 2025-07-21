import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-light py-3 text-center" style={
        { position: "fixed", top: "90vh", width: "100%" }
      }>
        <p> Copyright &copy; 2023 TodoList App</p>
      </footer>
    </>
  );
}
