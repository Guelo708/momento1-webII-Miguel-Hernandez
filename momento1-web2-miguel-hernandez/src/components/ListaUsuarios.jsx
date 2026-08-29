import { useState } from "react";

export default function ListaUsuarios() {
  const [usuarios] = useState([
    { id: 1, nombre: "Ana", apellido: "García", profesion: "Ingeniera", foto: "https://i.pravatar.cc/100?img=1" },
    { id: 2, nombre: "Carlos", apellido: "López", profesion: "Diseñador", foto: "https://i.pravatar.cc/100?img=2" },
    { id: 3, nombre: "Laura", apellido: "Martínez", profesion: "Doctora", foto: "https://i.pravatar.cc/100?img=3" },
    { id: 4, nombre: "Miguel", apellido: "Hernández", profesion: "Administrador", foto: "https://i.pravatar.cc/100?img=4" },
    { id: 5, nombre: "Sofía", apellido: "Ramírez", profesion: "Contadora", foto: "https://i.pravatar.cc/100?img=5" },
    { id: 6, nombre: "Andrés", apellido: "Torres", profesion: "Programador", foto: "https://i.pravatar.cc/100?img=6" },
    { id: 7, nombre: "Valentina", apellido: "Morales", profesion: "Arquitecta", foto: "https://i.pravatar.cc/100?img=7" },
    { id: 8, nombre: "Camilo", apellido: "Vargas", profesion: "Abogado", foto: "https://i.pravatar.cc/100?img=8" },
    { id: 9, nombre: "María", apellido: "Castro", profesion: "Psicóloga", foto: "https://i.pravatar.cc/100?img=9" },
    { id: 10, nombre: "Julián", apellido: "Suárez", profesion: "Profesor", foto: "https://i.pravatar.cc/100?img=10" },
    { id: 11, nombre: "Paula", apellido: "Ríos", profesion: "Enfermera", foto: "https://i.pravatar.cc/100?img=11" },
    { id: 12, nombre: "Felipe", apellido: "Gómez", profesion: "Economista", foto: "https://i.pravatar.cc/100?img=12" },
    { id: 13, nombre: "Isabela", apellido: "Ortiz", profesion: "Diseñadora UX", foto: "https://i.pravatar.cc/100?img=13" },
    { id: 14, nombre: "Sebastián", apellido: "Cano", profesion: "Ingeniero Civil", foto: "https://i.pravatar.cc/100?img=14" },
    { id: 15, nombre: "Lucía", apellido: "Mejía", profesion: "Periodista", foto: "https://i.pravatar.cc/100?img=15" },
    { id: 16, nombre: "Daniel", apellido: "Pérez", profesion: "Analista Financiero", foto: "https://i.pravatar.cc/100?img=16" },
    { id: 17, nombre: "Gabriela", apellido: "Jiménez", profesion: "Marketing", foto: "https://i.pravatar.cc/100?img=17" },
    { id: 18, nombre: "Juan", apellido: "Salazar", profesion: "Chef", foto: "https://i.pravatar.cc/100?img=18" },
    { id: 19, nombre: "Natalia", apellido: "Cárdenas", profesion: "Diseñadora Gráfica", foto: "https://i.pravatar.cc/100?img=19" },
    { id: 20, nombre: "Esteban", apellido: "Mendoza", profesion: "Fotógrafo", foto: "https://i.pravatar.cc/100?img=20" },
  ]);

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Lista de Usuarios</h2>
      <div style={styles.grid}>
        {usuarios.map((u) => (
          <div key={u.id} style={styles.card}>
            <img src={u.foto} alt={`${u.nombre} ${u.apellido}`} style={styles.image} />
            <h3 style={styles.name}>{u.nombre} {u.apellido}</h3>
            <p style={styles.profession}>{u.profesion}</p>
            <button style={styles.button}>Contactar</button>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "20px",
    backgroundColor: "#FFFFFF",
    margin: "20px",
    borderRadius: "8px",
  },
  title: {
    color: "#0033A0",
    fontFamily: "Segoe UI, Arial, sans-serif",
    marginBottom: "20px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#4EC3E0",
    color: "#FFFFFF",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
    border: "3px solid #FFE946",
  },
  name: {
    margin: "0 0 10px 0",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#0033A0", // azul institucional
  },
  profession: {
    margin: "0 0 15px 0",
    fontSize: "1rem",
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#FFFFFF", // fondo blanco
    color: "#0033A0", // texto azul
    border: "2px solid #0033A0",
    padding: "8px 12px",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};


