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

const Form = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();


    return (
        <FormControl

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
            />
            <Button
                type="submit"
                size="small"
                variant="contained"
                color="primary"
            >
            </Button>
        </FormControl >
    )
}

export default Form
