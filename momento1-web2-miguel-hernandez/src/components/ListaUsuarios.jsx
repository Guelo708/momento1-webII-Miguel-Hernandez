import { useState } from "react";

export default function ListaUsuarios() {
  const [usuarios] = useState([
    { id: 1, nombre: "Ana", apellido: "García", profesion: "Ingeniera" },
    { id: 2, nombre: "Carlos", apellido: "López", profesion: "Diseñador" },
    { id: 3, nombre: "Laura", apellido: "Martínez", profesion: "Doctora" },
    { id: 4, nombre: "Miguel", apellido: "Hernández", profesion: "Administrador" },
    { id: 5, nombre: "Sofía", apellido: "Ramírez", profesion: "Contadora" },
    { id: 6, nombre: "Andrés", apellido: "Torres", profesion: "Programador" },
    { id: 7, nombre: "Valentina", apellido: "Morales", profesion: "Arquitecta" },
    { id: 8, nombre: "Camilo", apellido: "Vargas", profesion: "Abogado" },
    { id: 9, nombre: "María", apellido: "Castro", profesion: "Psicóloga" },
    { id: 10, nombre: "Julián", apellido: "Suárez", profesion: "Profesor" },
    { id: 11, nombre: "Paula", apellido: "Ríos", profesion: "Enfermera" },
    { id: 12, nombre: "Felipe", apellido: "Gómez", profesion: "Economista" },
    { id: 13, nombre: "Isabela", apellido: "Ortiz", profesion: "Diseñadora UX" },
    { id: 14, nombre: "Sebastián", apellido: "Cano", profesion: "Ingeniero Civil" },
    { id: 15, nombre: "Lucía", apellido: "Mejía", profesion: "Periodista" },
    { id: 16, nombre: "Daniel", apellido: "Pérez", profesion: "Analista Financiero" },
    { id: 17, nombre: "Gabriela", apellido: "Jiménez", profesion: "Marketing" },
    { id: 18, nombre: "Juan", apellido: "Salazar", profesion: "Chef" },
    { id: 19, nombre: "Natalia", apellido: "Cárdenas", profesion: "Diseñadora Gráfica" },
    { id: 20, nombre: "Esteban", apellido: "Mendoza", profesion: "Fotógrafo" },
  ]);

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Lista de Usuarios</h2>
      <div style={styles.grid}>
        {usuarios.map((u) => (
          <div key={u.id} style={styles.card}>
            <h3 style={styles.name}>{u.nombre} {u.apellido}</h3>
            <p style={styles.profession}>{u.profesion}</p>
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
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "15px",
  },
  card: {
    backgroundColor: "#4EC3E0", // azul claro institucional
    color: "#FFFFFF",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  name: {
    margin: "0 0 10px 0",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#FFE946", // amarillo institucional
  },
  profession: {
    margin: 0,
    fontSize: "1rem",
    fontStyle: "italic",
  },
};

