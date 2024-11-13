import React, { useState } from 'react';
import Button from '@/ui/atoms/Button/Button';
import FormSelect from '@/ui/molecules/FormSelect/FormSelect';
import FormTextarea from '@/ui/molecules/FormTextarea/FormTextarea';
import FormInput from '@/ui/molecules/FormInput/FormInput';
import { toast } from 'react-toastify';
import styles from "./Forms.module.scss";

const FormAdd: React.FC = () => {
    const url = ""

    const [formData, setFormData] = useState<{ [key: string]: string }>({

    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {

        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': "*/*"
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            setFormData({

            });

            toast.success("¡Felicidades! Has añadido un nuevo elemento con éxito.")
        } catch (err) {
            console.error(err);
            toast.error("¡Oops! El elemento ingresado no se pudo añadir.")
        }
    };

    return (
        <form className={styles.forms} onSubmit={handleSubmit}>
            <h2> </h2>
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
                text="Compañía" htmlFor="companyId" className="modal-fields" options={[]}
                name="companyId" value={formData.companyId} onChange={handleChange} />
            <Button className={styles.submitBtn} type='submit' label="Guardar" />
        </form>
    );
};

export default FormAdd;