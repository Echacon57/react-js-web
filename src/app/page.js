"use client";

import { useState } from "react";

// Lista inicial de alumnos
const alumnosIniciales = [
  { nombre: "Carlos Hector", apellido: "Leal Delgado", carrera: "LCC" },
  { nombre: "Alexis Felipe", apellido: "Elorza Obregon", carrera: "LCC" },
  { nombre: "Axel Gabriel", apellido: "Gutierrez Ruano", carrera: "LCC" },
  { nombre: "Eder Abraham", apellido: "Sampayo Gonzalez", carrera: "LCC" },
  { nombre: "Edgar Aurelio", apellido: "Santiago Santiago", carrera: "LCC" },
  { nombre: "Carlos Hector", apellido: "De Leon Saucedo", carrera: "LCC" },
  { nombre: "Mayela Mayte", apellido: "Lopez Cerino", carrera: "LCC" },
  { nombre: "Rodrigo", apellido: "Lopez Escobedo", carrera: "LMAD" },
  { nombre: "Emiliano", apellido: "Chacon Alvarez", carrera: "LCC" },
];

export default function Home() {
  // Estado: el arreglo de alumnos y los valores de los 3 campos de texto
  const [alumnos, setAlumnos] = useState(alumnosIniciales);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [carrera, setCarrera] = useState("");

  function agregarAlumno() {
    // No agregar si falta algún dato
    if (!nombre.trim() || !apellido.trim() || !carrera.trim()) return;

    const nuevoAlumno = {
      nombre: nombre.trim(),
      apellido: apellido.trim(),
      carrera: carrera.trim(),
    };

    // Equivalente a push (agregar al final), pero sin modificar el arreglo original.
    // React necesita un arreglo NUEVO para detectar el cambio y volver a renderizar.
    setAlumnos([...alumnos, nuevoAlumno]);

    // Si quisieras agregar al INICIO (como unshift):
    // setAlumnos([nuevoAlumno, ...alumnos]);

    // Limpiar los campos
    setNombre("");
    setApellido("");
    setCarrera("");
  }

  return (
    <div>
      <h1>Alumnos</h1>

      <section>
        <h2>Agrega alumno:</h2>
        <label htmlFor="nombre">Nombre de alumno:</label>
        <input
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="apellido">Apellido de alumno:</label>
        <input
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <label htmlFor="carrera">Carrera de alumno:</label>
        <input
          id="carrera"
          value={carrera}
          onChange={(e) => setCarrera(e.target.value)}
        />
        <button onClick={agregarAlumno}>Agregar</button>
      </section>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Carrera</th>
          </tr>
        </thead>

        <tbody>
          {alumnos.map((alumno, index) => (
            <tr key={index}>
              <td>
                <div className="flexbox flex-row">
                  <img
                    src="student.jpg"
                    width="50"
                    height="50"
                    className="estudianteAvatar"
                    alt=""
                  />
                  <span>{alumno.nombre}</span>
                </div>
              </td>
              <td>{alumno.apellido}</td>
              <td>{alumno.carrera}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}