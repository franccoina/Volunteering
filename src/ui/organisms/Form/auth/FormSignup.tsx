"use client";
import { IRegisterRequest } from "@/app/core/application/dto";
import Button from "@/ui/atoms/Button/Button";
import FormInput from "@/ui/molecules/FormInput/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from "./FormAuth.module.scss"
import * as yup from "yup";
import { toast } from "react-toastify";
import { FormSelect } from "@/ui/molecules/FormSelect/FormSelect";
import { FormFile } from "@/ui/molecules/FormFile/FormFile";

const signupSchema = yup.object().shape({
    email: yup
        .string()
        .email('Email inválido')
        .required('Email requerido'),
    password: yup
        .string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .required('Contraseña requerida'),
    name: yup
        .string()
        .min(1, 'El nombre de usuario debe tener al menos 1 caracter')
        .required('Nombre de usuario requerido'),
    role: yup
        .string()
        .required('Rol requerido'),
    photo: yup
        .mixed<File>()
        .nullable()
        .notRequired()
});

const FormSignup = () => {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<IRegisterRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(signupSchema)
    });

    const handleRegister = async (data: IRegisterRequest) => {
        try {
            const formData = new FormData();

            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("name", data.name);
            formData.append("role", data.role);

            if (data.photo) {
                formData.append("photo", data.photo);
            }

            const response = await fetch("/api/users/create-user", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error("Error al registrar el usuario");
            }
            toast.success('Usuario registrado con éxito.');
            router.push("/login")
            return await response.json();

        } catch (error) {
            console.error("Error en el POST:", error);
            toast.error("No fue posible registrar el usuario. Intenta de nuevo.")
            throw error;
        }
    };


    return (
        <form className={styles.form} onSubmit={handleSubmit(handleRegister)}>
            <h1 className={styles.h1}>Registrarse</h1>

            <FormInput<IRegisterRequest>
                control={control}
                type="email"
                name="email"
                label="Email"
                error={errors.email}
                placeholder="Ingrese Email"
            />

            <FormInput<IRegisterRequest>
                control={control}
                type="password"
                name="password"
                label="Contraseña"
                error={errors.password}
                placeholder="Ingrese Contraseña"
            />

            <FormInput<IRegisterRequest>
                control={control}
                type="text"
                name="name"
                label="Nombre"
                error={errors.name}
                placeholder="Ingrese Nombre"
            />

            <div className={styles.colspan}>
                <FormSelect<IRegisterRequest>
                    control={control}
                    options={[
                        { value: "organizer", label: "Organizador" },
                        { value: "user", label: "Usuario" }
                    ]}
                    name="role"
                    label="Rol"
                    error={errors.role}
                />

                <FormFile<IRegisterRequest>
                    control={control}
                    name="photo"
                    label="Foto de Perfil"
                    error={errors.photo}
                />
            </div>
            <Button
                type="submit"
                className={"secondaryBtn"}
            >
                Registrarse
            </Button>
        </form>
    );
};

export default FormSignup;