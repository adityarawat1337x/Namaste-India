import React from "react";
import {
    Button,
    FormControl,
    TextField,
    Card,
    Typography,
    CardContent,
} from "@material-ui/core/";
import { useForm } from "react-hook-form";
import "./styles.css"
import { useState } from "react";

const Form = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [state, setForm] = useState(false)

    return (
        <div className="form">
            {!state && <FormControl
                style={{ display: "flex", flexDirection: "column", width: "400px" }}
                component="div"
                color="secondary"
            >
                <TextField
                    label="Full Name"
                    autoFocus={true}
                    type="text"
                    color="primary"

                    {...register("name")}
                />
                <TextField
                    label="Email Id"
                    type="text"
                    color="secondary"
                    {...register("email")}
                />
                <TextField
                    label="Contact"
                    type="number"
                    color="secondary"
                    {...register("contact")}
                />
                <TextField
                    label="Message"
                    type="text"
                    color="secondary"
                    {...register("msg")}
                /><br />
                <br />
                <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    color="primary"
                    onClick={() => setForm(!state)}
                >Contact Us
                </Button>
            </FormControl>}
            {state && <div>
                <h1>Thankyou</h1></div>}
        </div>
    )
}

export default Form
