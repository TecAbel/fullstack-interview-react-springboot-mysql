import type { Person } from "../../services/persons/interfaces/person.interface";
import { PersonsService } from "../../services/persons/persons-service";
interface Props {
  loading: boolean;
  persons: Array<Person>;
  onDelete: () => void | Promise<void>;
  onUpdate: (personId: number) => void | Promise<void>;
}
export default function PersonsTable({
  persons,
  loading,
  onDelete,
  onUpdate,
}: Props) {
  const handleDelete = async (personId: number) => {
    const result = await PersonsService.del(personId);
    if (!result || !result.status) return;
    onDelete();
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Listado de Personal
        </h2>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          {persons.length} Registros
        </span>
      </div>

      <div className="overflow-x-auto shadow-md sm:rounded-lg border border-gray-200">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
            <tr>
              <th scope="col" className="px-6 py-4">
                ID
              </th>
              <th scope="col" className="px-6 py-4">
                Nombre Completo
              </th>
              <th scope="col" className="px-6 py-4">
                Puesto
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                Sueldo
              </th>
              <th scope="col" className="px-6 py-4 text-center">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td>Cargando datos....</td>
              </tr>
            )}
            {!loading &&
              persons.map((person) => (
                <tr
                  key={person.id}
                  className="bg-white border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {person.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold text-gray-800">
                      {person.name} {person.lastName}
                    </div>
                    <div className="text-xs text-gray-400">{}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {person.jobPosition}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-mono text-gray-700">
                    ${new Intl.NumberFormat("es-MX").format(person.salary)}
                  </td>
                  <td className="px-6 py-4 text-center space-x-2">
                    <button
                      onClick={() => onUpdate(person.id)}
                      className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(person.id)}
                      className="font-medium text-red-600 hover:text-red-800 hover:underline"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
