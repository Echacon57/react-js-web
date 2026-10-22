"use client";

import { useState } from "react";
import Link from "next/link";
import alumnosIniciales, { CALIFICACION_MINIMA } from "@/data/alumnos";

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
                <th>Matrícula</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Carrera</th>
                <th>Calificación</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((alumno) => (
                <tr key={alumno.matricula}>
                  <td>{alumno.matricula}</td>
                  <td>
                    <div className="flexbox flex-row">
                      <img
                        src="student.jpg"
                        width="50"
                        height="50"
                        className="estudianteAvatar"
                        alt=""
                      />
                      <Link href={`/alumnos/${alumno.matricula}`}>
                        {alumno.nombre}
                      </Link>
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

export default function AlumnosPage() {
  const [alumnos, setAlumnos] = useState(alumnosIniciales);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [carrera, setCarrera] = useState("");
  const [calificacion, setCalificacion] = useState("");

  const regulares = alumnos.filter((a) => a.calificacion >= CALIFICACION_MINIMA);
  const irregulares = alumnos.filter((a) => a.calificacion < CALIFICACION_MINIMA);

  function agregarAlumno(e) {
    e.preventDefault(); 

    if (!nombre.trim() || !apellido.trim() || !carrera.trim() || calificacion === "") return;

    const nuevoAlumno = {
      matricula: String(2021000 + alumnos.length + 1),
      nombre: nombre.trim(),
      apellido: apellido.trim(),
      carrera: carrera.trim(),
      calificacion: Number(calificacion),
    };

    setAlumnos([...alumnos, nuevoAlumno]);

    setNombre("");
    setApellido("");
    setCarrera("");
    setCalificacion("");
  }

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Alumnos</h1>
          <p className="hero-subtitulo">
            Agrega alumnos. Con calificación de {CALIFICACION_MINIMA} o más son
            regulares; con menos, irregulares.
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
  );
}
