"use client";

import { useState } from "react";

const CALIFICACION_MINIMA = 70;

const alumnosIniciales = [
  { nombre: "Carlos Hector", apellido: "Leal Delgado", carrera: "LCC", tipo: "regular", calificacion: 85 },
  { nombre: "Alexis Felipe", apellido: "Elorza Obregon", carrera: "LCC", tipo: "regular", calificacion: 92 },
  { nombre: "Axel Gabriel", apellido: "Gutierrez Ruano", carrera: "LCC", tipo: "regular", calificacion: 68 },
  { nombre: "Eder Abraham", apellido: "Sampayo Gonzalez", carrera: "LCC", tipo: "regular", calificacion: 75 },
  { nombre: "Edgar Aurelio", apellido: "Santiago Santiago", carrera: "LCC", tipo: "regular", calificacion: 55 },
  { nombre: "Carlos Hector", apellido: "De Leon Saucedo", carrera: "LCC", tipo: "regular", calificacion: 90 },
  { nombre: "Mayela Mayte", apellido: "Lopez Cerino", carrera: "LCC", tipo: "regular", calificacion: 72 },
  { nombre: "Rodrigo", apellido: "Lopez Escobedo", carrera: "LMAD", tipo: "regular", calificacion: 64 },
  { nombre: "Emiliano", apellido: "Chacon Alvarez", carrera: "LCC", tipo: "regular", calificacion: 88 },
];

function TablaAlumnos({ titulo, lista }) {
  return (
    <div className="lista">
      <h2>{titulo}</h2>
      <p className="contador">
        {lista.length} {lista.length === 1 ? "alumno" : "alumnos"}
      </p>

      {lista.length > 0 ? (
        <div className="tabla-wrap">
          <table className="tabla">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Carrera</th>
                <th>Calificación</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((alumno, index) => (
                <tr
                  key={index}
                  className={
                    alumno.calificacion < CALIFICACION_MINIMA ? "oculto" : ""
                  }
                >
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
                  <td>{alumno.calificacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="sin-resultados">No hay {titulo.toLowerCase()}.</p>
      )}
    </div>
  );
}

export default function Home() {
  const [alumnos, setAlumnos] = useState(alumnosIniciales);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [carrera, setCarrera] = useState("");
  const [tipo, setTipo] = useState("regular");
  const [calificacion, setCalificacion] = useState("");

  const regulares = alumnos.filter((a) => a.tipo === "regular");
  const irregulares = alumnos.filter((a) => a.tipo === "irregular");

  function agregarAlumno(e) {
    e.preventDefault(); 

    if (!nombre.trim() || !apellido.trim() || !carrera.trim() || calificacion === "") return;

    const nuevoAlumno = {
      nombre: nombre.trim(),
      apellido: apellido.trim(),
      carrera: carrera.trim(),
      tipo: tipo,
      calificacion: Number(calificacion),
    };

    setAlumnos([...alumnos, nuevoAlumno]);

    setNombre("");
    setApellido("");
    setCarrera("");
    setTipo("regular");
    setCalificacion("");
  }

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <span className="logo">
            Registro<span>Alumnos</span>
          </span>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Alumnos</h1>
            <p className="hero-subtitulo">
              Agrega alumnos y clasifícalos como regulares o irregulares.
              Los alumnos con calificación menor a {CALIFICACION_MINIMA} no se muestran.
            </p>

            <form className="form-alumno" onSubmit={agregarAlumno}>
              <div className="field">
                <label htmlFor="nombre">Nombre de alumno</label>
                <input
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="apellido">Apellido de alumno</label>
                <input
                  id="apellido"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="carrera">Carrera de alumno</label>
                <input
                  id="carrera"
                  value={carrera}
                  onChange={(e) => setCarrera(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="tipo">Tipo de alumno</label>
                <select
                  id="tipo"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                >
                  <option value="regular">Regular</option>
                  <option value="irregular">Irregular</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="calificacion">Calificación</label>
                <input
                  id="calificacion"
                  type="number"
                  min="0"
                  max="100"
                  value={calificacion}
                  onChange={(e) => setCalificacion(e.target.value)}
                />
              </div>
              <button type="submit" className="boton">
                Agregar
              </button>
            </form>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <TablaAlumnos titulo="Alumnos regulares" lista={regulares} />
            <TablaAlumnos titulo="Alumnos irregulares" lista={irregulares} />
          </div>
        </section>
      </main>
    </>
  );
}
