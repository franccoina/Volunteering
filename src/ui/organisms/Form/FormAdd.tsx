import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@/ui/atoms/Button/Button';
import FormSelect from '@/ui/molecules/FormSelect/FormSelect';
import FormTextarea from '@/ui/molecules/FormTextarea/FormTextarea';
import FormInput from '@/ui/molecules/FormInput/FormInput';
import { ICompany, INewCompany, INewVacants, ICompanyResponse } from '@/models/organisms/Cards';
import { toast } from 'react-toastify';

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
}

const FormAdd: React.FC<IFormProps> = ({ isView }) => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        title: '',
        description: '',
        status: '',
        companyId: '',
        name: '',
        location: '',
        contact: ''
    });

    const [cardData, setCardData] = useState<Array<ICompany>>([]);

    const isPost = () => {
        if (isView === "companies") {
            const data: INewVacants = {
                title: formData.title,
                description: formData.description,
                status: formData.status,
                companyId: formData.companyId
            };
            const url = "https://vacantsbackendgates-production.up.railway.app/api/v1/vacants";
            return { url, data };
        } else {
            const data: INewCompany = {
                name: formData.name,
                location: formData.location,
                contact: formData.contact,
            };
            const url = "https://vacantsbackendgates-production.up.railway.app/api/v1/company";
            return { url, data };
        }
    };

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await fetch("https://vacantsbackendgates-production.up.railway.app/api/v1/company", {
                    method: "GET",
                    headers: { 'Accept': "*/*" },
                });
                const responseData: ICompanyResponse = await response.json();
                setCardData(responseData.content);
            } catch (err) {
                console.error(err);
            }
        };

        fetchCompanies();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const toPost = isPost(); 

        try {
            const response = await fetch(toPost.url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': "*/*"
                },
                body: JSON.stringify(toPost.data),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            setFormData({
                title: '',
                description: '',
                status: '',
                companyId: '',
                name: '',
                location: '',
                contact: ''
            });

            const res = await fetch("https://vacantsbackendgates-production.up.railway.app/api/v1/company?size=10", {
                method: "GET",
                headers: { 'Accept': "*/*" },
            });

            const responseData: ICompanyResponse = await res.json();
            setCardData(responseData.content);

            toast.success("¡Felicidades! Has añadido un nuevo elemento con éxito.")
        } catch (err) {
            console.error(err);
            toast.error("¡Oops! El elemento ingresado no se pudo añadir.")
        }
    };

    const companiesId = cardData.map(company => company.id);

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledFormTitle>{isView !== "vacants" ? 'Agregar Vacante' : 'Agregar Compañía'}</StyledFormTitle>
            {isView !== "vacants" ? (
                <>
                    <FormInput
                        text="Título" htmlFor="title" className="modal-fields" placeholder="Título" type="text"
                        name="title" value={formData.title} onChange={handleChange} />
                    <FormTextarea
                        text="Descripción" htmlFor="description" className="modal-fields" placeholder="Descripción"
                        name="description" value={formData.description} onChange={handleChange} />
                    <FormSelect
                        text="Estado" htmlFor="status" className="modal-fields" options={['ACTIVE', 'INACTIVE']}
                        name="status" value={formData.status} onChange={handleChange} />
                    <FormSelect
                        text="Compañía" htmlFor="companyId" className="modal-fields" options={companiesId}
                        name="companyId" value={formData.companyId} onChange={handleChange} />
                </>
            ) : (
                <>
                    <FormInput
                        text="Nombre" htmlFor="name" className="modal-fields" placeholder="Nombre" type="text"
                        name="name" value={formData.name} onChange={handleChange} />
                    <FormInput
                        text="Ubicación" htmlFor="location" className="modal-fields" placeholder="Ubicación" type="text"
                        name="location" value={formData.location} onChange={handleChange} />
                    <FormInput
                        text="Contacto" htmlFor="contact" className="modal-fields" placeholder="Contacto" type="text"
                        name="contact" value={formData.contact} onChange={handleChange} />
                </>
            )}
            <Button className='submitBtn' type='submit' label="Agregar" />
        </StyledForm>
    );
};

export default FormAdd;