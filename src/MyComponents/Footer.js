export default function Footer() {
  let footerStyle = {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    marginTop: "5em",
    zIndex: 1000
  }
  return (
    <footer className="bg-dark text-light py-3 text-center " style={footerStyle}>
      <p> Copyright &copy; 2023 TodoList App</p>
    </footer>
  );
}
