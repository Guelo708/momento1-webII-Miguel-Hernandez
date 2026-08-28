export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2026 Miguel Eduardo Hernández - Todos los derechos reservados</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#00AEC7", // turquesa institucional
    padding: "15px",
    textAlign: "center",
    marginTop: "40px",
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontFamily: "Segoe UI, Arial, sans-serif",
  }
};
