import Link from "next/link";
import alumnos, { CALIFICACION_MINIMA } from "@/data/alumnos";

export default async function AlumnoDetallePage({ params }) {
  const { id } = await params;
  const alumno = alumnos.find((a) => a.matricula === id);

  if (!alumno) {
    return (
      <main className="section">
        <div className="container">
          <p className="sin-resultados">
            No existe ningún alumno con la matrícula {id}.
          </p>
          <Link href="/alumnos">Volver a alumnos</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="container">
        <h1>
          {alumno.nombre} {alumno.apellido}
        </h1>

        <div className="card">
          <p>Matrícula: {alumno.matricula}</p>
          <p>Carrera: {alumno.carrera}</p>
          <p>Calificación: {alumno.calificacion}</p>
          <p>
            Estatus:{" "}
            {alumno.calificacion >= CALIFICACION_MINIMA ? "Regular" : "Irregular"}
          </p>
        </div>

        <p style={{ marginTop: "1.5rem" }}>
          <Link href="/alumnos">Volver a alumnos</Link>
        </p>
      </div>
    </main>
  );
}
