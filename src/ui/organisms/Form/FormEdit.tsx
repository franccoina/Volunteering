import React, { useState, useEffect } from 'react';
import Button from '@/ui/atoms/Button/Button';
import FormSelect from '@/ui/molecules/FormSelect/FormSelect';
import FormTextarea from '@/ui/molecules/FormTextarea/FormTextarea';
import FormInput from '@/ui/molecules/FormInput/FormInput';
import { useFormEditContext } from '@/ui/contexts/FormEditContext';
import { toast } from "react-toastify";
import styles from "./Forms.module.scss";
interface IFormProps {
    idToEdit: string | number;
}

const FormEdit: React.FC<IFormProps> = ({ idToEdit }) => {
    const { cardData, setCardData, formData, setFormData } = useFormEditContext();
    const [, setCurrentData] = useState<unknown>();

    useEffect(() => {
        const fetchCompanies = async () => {
            const url = "";

            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': "*/*"
                    },
                });
                const responseData = await response.json();
                setCardData(responseData.content);
            } catch (err) {
                console.error(err);
            }
        };

        fetchCompanies();
    }, [setCardData]);

    useEffect(() => {
        // Buscar el dato correspondiente en cardData
        if (cardData) {
            const foundData = cardData.find(item => item.id.toString() === idToEdit);
            setCurrentData(foundData);

            if (foundData) {
                setFormData({

                });
            }
        }
    }, [cardData, idToEdit, setFormData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const dataToSend = {};

        const url = "";

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

    return (
        <form className={styles.forms} onSubmit={handleSubmit}>
            <h2> </h2>
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
                options={[]}
                name="companyId" value={formData.companyId} onChange={handleChange} />
            <Button className={styles.submitBtn} type='submit' label="Guardar" />
        </form>
    );
};

export default FormEdit;
