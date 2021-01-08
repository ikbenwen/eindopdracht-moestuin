import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./RegistrationForm.css";
import axios from "axios";

export default function RegistrationForm() {
    const [ status, setStatus ] = useState("idle");
    const {
        handleSubmit,
        register,
        errors,
        setError,
        clearErrors,
        formState: { isSubmitting }
    } = useForm();
    const onSubmit = data => {
        console.log(JSON.stringify(data));
    };

    async function postForm(data) {
        setStatus("submitting");
        try {
            const response = await axios.post (
                "https://jsonplaceholder.typicode.com/comments",
                {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                }
            );
            console.log("api zegt" + response);
            setStatus("success");
        } catch (error) {
            setStatus("error")
        }
    }



    return (
        <form className="registrationForm" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <h1>Registreer</h1>
                <label htmlFor="details-name">
                    username:
                    <input
                        type="text"
                        name="username"
                        id="details-name"
                        ref={register({ required: true })}
                    />
                </label>
                {errors.username && <p>Dit veld is verplicht</p>}


                <label htmlFor="details-email">
                    email:
                    <input
                        type="email"
                        name="email"
                        id="details-email"
                        ref={register({ required: true })}
                    />
                </label>
                {errors.email && <p>Dit veld is verplicht</p>}

                <label htmlFor="details-password">
                    wachtwoord:
                    <input
                        type="password"
                        name="password"
                        id="details-password"
                        ref={register({ required: true })}
                    />
                </label>
                {errors.password && <p>Dit veld is verplicht</p>}

            </fieldset>
            <button type="submit" >submit</button>
        </form>
    )
}


