"use client";
import { ErrorResponse, FieldError, ILoginRequest } from "@/app/core/application/dto";
import Button from "@/ui/atoms/Button/Button";
import FormInput from "@/ui/molecules/FormInput/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "./FormAuth.module.scss";
import Links from "@/ui/atoms/Link/Link";

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email("El correo es inválido")
        .required("El correo el obligatorio"),
    password: yup
        .string()
        .min(8, "La contraseña debe tener  al menos 8  caracteres")
        .required("La contraseña es obligatoria"),
});

const FormSignup: React.FC = () => {
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<ILoginRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(loginSchema),
    });

    const router = useRouter()
    const handleLogin = async (data: ILoginRequest) => {
        console.log(data);
        //SERVICE LOGIN
        try {
            const result = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password,
            });

            console.log(result);

            if (result?.error) {
                console.log("Ocurrio un error", JSON.parse(result.error));
                handleError(JSON.parse(result.error))
                return;
            }
            router.push("/dashboard/projects")
        } catch (error) {
            console.log(error);
        }
    };

    const handleError = (error: unknown) => {
        const erroData = error as ErrorResponse;
        if (erroData && erroData.errors) {
            if (Array.isArray(erroData.errors) && "field" in erroData.errors[0]) {
                erroData.errors.forEach((fieldError) => {
                    const { field, error } = fieldError as FieldError;
                    setError(field as keyof ILoginRequest, {
                        message: error,
                    });
                });
            } else {
                if ("message" in erroData.errors[0]) {
                    setError("email", {
                        message: erroData.errors[0].message,
                    });
                }
            }
        }
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit(handleLogin)}
        >
            <h1 className={styles.h1}>Registrarse</h1>
            <p className={styles.p}>Ingresa tus credenciales para acceder a tu cuenta</p>
            <FormInput<ILoginRequest>
                control={control}
                type="email"
                label="Correo Electrónico"
                name="email"
                error={errors.email}
                placeholder="Ingresa tu correo"
            />
            <FormInput<ILoginRequest>
                control={control}
                type="password"
                label="Contraseña"
                name="password"
                error={errors.password}
                placeholder="Ingresa tu contraseña"
            />
            <Button
                type="submit"
                className={styles.button}
                label="Iniciar Sesión"
            />
            <Links href="/forgot-password" label="¿Olvidáste tu contraseña?" className={styles.link} />
            <p className={styles.div}>
                ¿No tienes una cuenta?{' '}
                <Links href="/register" label="Regístrate aquí" className={styles.link} />
            </p>
        </form>
    );
};

export default FormSignup;