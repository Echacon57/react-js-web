import profesores from "@/data/profesores";

export default function ProfesoresPage() {
  return (
    <main className="section">
      <div className="container">
        <h1>Profesores</h1>

        <div className="tabla-wrap">
          <table className="tabla">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Materia</th>
                <th>Correo</th>
              </tr>
            </thead>
            <tbody>
              {profesores.map((profesor) => (
                <tr key={profesor.id}>
                  <td>{profesor.nombre}</td>
                  <td>{profesor.apellido}</td>
                  <td>{profesor.materia}</td>
                  <td>{profesor.correo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
