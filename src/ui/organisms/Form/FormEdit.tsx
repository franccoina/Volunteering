import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@/ui/atoms/Button/Button';
import FormSelect from '@/ui/molecules/FormSelect/FormSelect';
import FormTextarea from '@/ui/molecules/FormTextarea/FormTextarea';
import FormInput from '@/ui/molecules/FormInput/FormInput';
import { ICompany, IVacants } from '@/models/organisms/Cards';
import { useFormEditContext } from '@/ui/contexts/FormEditContext';
import { toast } from "react-toastify";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
`;

const StyledFormTitle = styled.h2`
    color: ${({ theme }) => theme.colors.textPrimary};
`;

interface IFormProps {
    isView: string;
    idToEdit: string | number;
}

const FormEdit: React.FC<IFormProps> = ({ isView, idToEdit }) => {
    const { cardData, setCardData, formData, setFormData } = useFormEditContext();
    const [, setCurrentData] = useState<ICompany | IVacants>();

    useEffect(() => {
        const fetchCompanies = async () => {
            const url =
                isView === "companies"
                    ? `https://vacantsbackendgates-production.up.railway.app/api/v1/company?size=10`
                    : `https://vacantsbackendgates-production.up.railway.app/api/v1/vacants?size=10`;

            try {
                const response = await fetch(url);
                const responseData = await response.json();
                setCardData(responseData.content);
            } catch (err) {
                console.error(err);
            }
        };

        fetchCompanies();
    }, [isView, setCardData]);

    useEffect(() => {
        // Buscar el dato correspondiente en cardData
        if (cardData) {
            const foundData = cardData.find(item => item.id.toString() === idToEdit);
            setCurrentData(foundData);

            if (foundData) {
                if (isView === "vacants") {
                    setFormData({
                        title: (foundData as IVacants).title,
                        description: (foundData as IVacants).description,
                        status: (foundData as IVacants).status,
                        companyId: (foundData as IVacants).company?.id,
                        name: '',
                        location: '',
                        contact: '',
                    });
                } else {
                    setFormData({
                        title: '',
                        description: '',
                        status: '',
                        name: (foundData as ICompany).name,
                        location: (foundData as ICompany).location,
                        contact: (foundData as ICompany).contact,
                        companyId: '',
                    });
                }
            }
        }
    }, [cardData, idToEdit, isView, setFormData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const dataToSend = isView === "companies"
            ? {
                name: formData.name,
                location: formData.location,
                contact: formData.contact,
            } : {
                title: formData.title,
                description: formData.description,
                status: formData.status,
                companyId: formData.companyId,
            };

        const url = isView === "companies"
            ? `https://vacantsbackendgates-production.up.railway.app/api/v1/company/${idToEdit}`
            : `https://vacantsbackendgates-production.up.railway.app/api/v1/vacants/${idToEdit}`;

        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': "*/*"
                },
                body: JSON.stringify(dataToSend),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            toast.success("¡Felicidades! Has editado el elemento seleccionado con éxito.")

        } catch (err) {
            console.error(err);
            toast.error("¡Oops! El elemento seleccionado no se pudo editar.")
        }
    };

    const companiesId = cardData.map(company => company.id);

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledFormTitle>{isView !== "vacants" ? 'Editar Compañía' : 'Editar Vacante'}</StyledFormTitle>
            {isView !== "vacants" ? (
                <>
                    <FormInput
                        text="Nombre" className="modal-fields" htmlFor="name" placeholder="Nombre"
                        name="name" value={formData.name} onChange={handleChange} />
                    <FormInput
                        text="Ubicación" className="modal-fields" htmlFor="location" placeholder="Ubicación"
                        name="location" value={formData.location} onChange={handleChange} />
                    <FormInput
                        text="Contacto" className="modal-fields" htmlFor="contact" placeholder="Contacto"
                        name="contact" value={formData.contact} onChange={handleChange} />
                </>
            ) : (
                <>
                    <FormInput
                        text="Título" className="modal-fields" htmlFor="title" placeholder="Título"
                        name="title" value={formData.title} onChange={handleChange} />
                    <FormTextarea
                        text="Descripción" className="modal-fields" htmlFor="description" placeholder="Descripción"
                        name="description" value={formData.description} onChange={handleChange} />
                    <FormSelect
                        text="Estado" className="modal-fields" htmlFor="status" options={['ACTIVE', 'INACTIVE']}
                        name="status" value={formData.status} onChange={handleChange} />
                    <FormSelect
                        text="Compañía" className="modal-fields" htmlFor="companyId"
                        options={companiesId}
                        name="companyId" value={formData.companyId} onChange={handleChange} />
                </>
            )}
            <Button className='submitBtn' type='submit' label="Guardar" />
        </StyledForm>
    );
};

export default FormEdit;
