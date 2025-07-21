import React from "react";

export default function Footer() {
  let footerStyle = {
    position: "relative",
    top: "5vh",
    width: "100%",
    marginTop: "2em"
  }
  return (
    <footer className="bg-dark text-light py-3 text-center " style={footerStyle}>
      <p> Copyright &copy; 2023 TodoList App</p>
    </footer>
  );
}
