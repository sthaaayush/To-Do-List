import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
export default function Header({ title = "Your Title", searchBar = true }) {
  // Using destructuring to extract title and searchBar props
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Using Destructuring for title and searchBar */}
        <Link className="navbar-brand" to="/">{title}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* Using Link component from react-router-dom for navigation instead of anchor tags and to instead of href */}
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {/* Conditional rendering of the search bar based on the searchBar prop */}
          {searchBar ? <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> : ""}
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string, // Ensuring title is a string
  searchBar: PropTypes.bool.isRequired // Ensuring searchBar is a boolean and is required
}