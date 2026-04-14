import { useEffect, useState } from "react";
import "./App.css";
import PersonForm from "./components/form/PersonsForm";
import PersonsTable from "./components/table/PersonsTable";
import { PersonsService } from "./services/persons/persons-service";
import type { Person } from "./services/persons/interfaces/person.interface";
import { ToastContainer } from "react-toastify";
function App() {
  const [persons, setPersons] = useState<Array<Person>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [updatePerson, setUpdatePerson] = useState<Person | undefined | null>();

  const getTableInfo = async () => {
    cleanUpdatePerson();
    setLoading(true);
    try {
      const response = await PersonsService.retrieve();
      if (response && response.data) {
        setPersons(response.data);
      }
    } finally {
      setLoading(false);
    }
  };

  const cleanUpdatePerson = () => {
    setUpdatePerson(null);
  };

  const handleOnUpdate = async (id: number) => {
    const person = await PersonsService.personById(id);
    if (!person?.data) return;
    setUpdatePerson(person.data);
  };

  useEffect(() => {
    getTableInfo();
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className="w-full max-w-screen-2xl mx-auto my-0 place-content-center grid grid-cols-12 justify-center p-4">
        <div className="md:col-span-2">
          <PersonForm onPersonAdded={getTableInfo} updateInfo={updatePerson} />
        </div>
        <div className="md:col-span-10">
          <PersonsTable
            loading={loading}
            onDelete={getTableInfo}
            onUpdate={handleOnUpdate}
            persons={persons}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
