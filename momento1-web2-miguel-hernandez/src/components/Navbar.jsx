export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Miguel Eduardo Hernández</h1> 
      <div style={styles.links}>
        <a href="/" style={styles.link}>Proyectos</a>
        <a href="/servicios" style={styles.link}>Servicios</a>
        <a href="/contacto" style={styles.link}>Contacto</a>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#0033A0",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Segoe UI, Arial, sans-serif",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
    color: "#FFE946"
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#FFFFFF", // contraste sobre azul
    textDecoration: "none",
    fontWeight: "bold",
  }
};

