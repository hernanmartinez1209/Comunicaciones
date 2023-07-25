

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-bg-success  w-100">
    <div className="container-fluid">
      <a className="navbar-brand text-light" href="#">Comunicaciones Globales</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Ventas y Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Soporte Tecnico</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Quienes Somos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Eventos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Contactenos</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
           <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
  )
}
