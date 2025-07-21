import React from "react";

export default function Footer() {
  let footerStyle = { position: "fixed", bottom: 0, width: "100%" }
  return (
      <footer className="bg-dark text-light py-3 text-center" style={footerStyle}>
        <p> Copyright &copy; 2023 TodoList App</p>
      </footer>
  );
}
