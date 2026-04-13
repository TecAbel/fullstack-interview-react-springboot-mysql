import { useEffect, useState } from "react";
import type {
  Person,
  PersonRequest,
} from "../../services/persons/interfaces/person.interface";
import { PersonsService } from "../../services/persons/persons-service";

interface Props {
  onPersonAdded: () => void | Promise<void>;
  updateInfo?: Person | null;
}

const PersonForm = ({ onPersonAdded, updateInfo }: Props) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<PersonRequest>({
    name: "",
    lastName: "",
    birthday: "",
    jobPosition: "",
    salary: 0,
  });

  useEffect(() => {
    if (updateInfo) {
      setFormData({
        name: updateInfo.name,
        lastName: updateInfo.lastName,
        birthday: updateInfo.birthday,
        jobPosition: updateInfo.jobPosition,
        salary: updateInfo.salary,
      });
    }
  }, [updateInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let resultStatus: boolean | undefined = false;
    try {
      if (updateInfo) {
        resultStatus = (await PersonsService.update(updateInfo.id, formData))
          ?.status;
      } else {
        resultStatus = (await PersonsService.save(formData))?.status;
      }
    } finally {
      setLoading(false);
      if (resultStatus && onPersonAdded) {
        onPersonAdded();
        cleanForm();
      }
    }
  };

  const cleanForm = () => {
    setFormData({
      name: "",
      lastName: "",
      birthday: new Date(),
      jobPosition: "",
      salary: 0,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
        {updateInfo ? "Editar" : "Registrar"} Persona
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {updateInfo && <div>Id: {updateInfo.id}</div>}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Apellido
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Fecha Nac.
          </label>
          <input
            type="date"
            name="birthday"
            value={formData.birthday as string}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sueldo
          </label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Puesto
          </label>
          <input
            type="text"
            name="jobPosition"
            value={formData.jobPosition}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          {loading && "Guardando info..."}
          {!loading && "Guardar Usuario"}
        </button>
      </form>
    </div>
  );
};

export default PersonForm;
