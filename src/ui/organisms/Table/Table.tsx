"use client";
import { Datum, IAllProjectsResponse } from "@/app/core/application/dto";
import { EndpointProjects } from "@/app/core/application/dto/model/projects.enum";
import TableRow from "@/ui/molecules/TableRows/TableDataRow/TableDataRow";
import TableHeaderRow from "@/ui/molecules/TableRows/TableHeadRow/TableHeaderRow";
import { useRouter } from "next/navigation";
import FormProject from "../Form/projects/FormProjects";
import styles from "./Table.module.scss"
import { useModalContext } from "@/ui/contexts/ModalContext";
import Input from "@/ui/atoms/Input/Input";
import { useState, useCallback, useEffect } from "react";

interface ITableProps {
  allData: IAllProjectsResponse;
}

interface ISearchResponse {
  statusCode: number;
  message: string;
  data: Datum[];
  metadata: {
    totalPages: number;
    currentPage: number;
    totalItems: number;
  };
}

const Table = ({ allData }: ITableProps) => {
  const { openModal, setModalContent } = useModalContext();
  const [selectedProject, setSelectedProject] = useState<Datum | null>(null);
  const [filteredData, setFilteredData] = useState<Datum[]>(allData.data);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const router = useRouter();

  // Función para obtener todos los proyectos de todas las páginas
  const fetchAllPages = async (searchTerm: string): Promise<Datum[]> => {
    const allProjects: Datum[] = [];
    let currentPage = 1;
    let totalPages = 1;

    do {
      try {
        const response = await fetch(`/api/projects/findAll?page=${currentPage}`);

        if (!response.ok) {
          throw new Error('Error al obtener los proyectos');
        }

        const result: ISearchResponse = await response.json();
        allProjects.push(...result.data);
        totalPages = result.metadata.totalPages;
        currentPage++;
      } catch (error) {
        console.error("Error fetching page", currentPage, error);
        break;
      }
    } while (currentPage <= totalPages);

    // Aplicar el filtro de búsqueda a todos los proyectos recolectados
    if (searchTerm.trim()) {
      const searchTerms = searchTerm.toLowerCase().split(' ');
      return allProjects.filter((project) => {
        const startDateStr = new Date(project.startDate).toLocaleDateString();
        const endDateStr = new Date(project.endDate).toLocaleDateString();

        const projectData = {
          title: project.title.toLowerCase(),
          description: project.description.toLowerCase(),
          organizer: project.organizer.name.toLowerCase(),
          startDate: startDateStr,
          endDate: endDateStr,
          status: project.isActive ? 'Active' : 'Inactive'
        };

        return searchTerms.every(term =>
          Object.values(projectData).some(value =>
            value.includes(term)
          )
        );
      });
    }

    return allProjects;
  };

  const handleSearch = useCallback(async (query: string) => {
    setIsSearching(true);

    try {
      if (!query.trim()) {
        setFilteredData(allData.data);
        return;
      }

      const results = await fetchAllPages(query);
      setFilteredData(results);
    } catch (error) {
      console.error("Error en la búsqueda:", error);
      alert("Hubo un error al realizar la búsqueda. Por favor, intente nuevamente.");
    } finally {
      setIsSearching(false);
    }
  }, [allData.data]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch(searchQuery);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, handleSearch]);

  const handleEdit = (project: Datum) => {
    setSelectedProject(project);
    setModalContent(
      (
        <FormProject initialData={selectedProject} />
      )
    );
    openModal()
  }

  const handleDelete = async (id: number) => {
    console.log("ID a eliminar:", id); // Imprime el id para verificar

    // Convertimos el id a string, ya que la URL espera un string
    const idString = id.toString();
    console.log("ID en string:", idString); // Verifica que el ID esté convertido a string

    const isConfirmed = confirm("¿Estás seguro que deseas borrar el proyecto?");
    if (!isConfirmed) return;

    try {
      const res = await fetch(`${EndpointProjects.DELETE_PROJECT.replace(":id", idString)}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Error borrando el proyecto");
      }
      console.log("Proyecto eliminado");
      router.refresh();
    } catch (error) {
      console.log("Error al eliminar el proyecto", error);
    }
  };

  return (
    <div className={styles.tableContainer}>
      <h2>Lista de Proyectos</h2>
      <div className={styles.inputContainer}>
        <div className={styles.search}>
          <Input
            type="text"
            name="search"
            placeholder="Buscar por título, descripción, organizador, fechas o estado..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            disabled={isSearching}
          />
        </div>
      </div>
      <table className={styles.table}>
        <TableHeaderRow />
        <tbody>
          {filteredData.length > 0 ? (filteredData.map((project) => (
            <TableRow
              key={project.id}
              title={project.title}
              description={project.description}
              startDate={project.startDate}
              endDate={project.endDate}
              isActive={project.isActive}
              organizer={project.organizer.name}
              onDelete={() => handleDelete(project.id)}
              onEdit={() => handleEdit(project)}
            />
          ))) : (
            <tr>
              <td colSpan={7} className="text-center py-4">
                <br />
                {isSearching ? 'Buscando...' : 'Ningún proyecto existente coincide con la búsqueda.'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;