import React from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'


function FormHooks() {
    
    
    const schema = yup.object().shape({
        fullName        : yup.string().required("Your Full Name is required"),
        email           : yup.string().email().required(),
        age             : yup.string().min(15).required(),
        password        : yup.string().min(6).max(21).required(),
        confirmPassword : yup.string().oneOf([yup.ref("password"), null] , "password Not match")
    })

    const {register , handleSubmit ,  formState: { errors }} = useForm({
        resolver : yupResolver(schema)
    });

    const onSubmit = (data) =>{
        console.log(data)
    }


    return (
        <>
            <form  onSubmit={handleSubmit(onSubmit)}>

                <input type="text"     placeholder='full Name'        {...register("fullName")}         className="form-control"/>
                <p>{errors.fullName?.message}</p>
                <input type="email"    placeholder='email'            {...register("email")}            className="form-control"/>
                <p>{errors.email?.message}</p>
                <input type="text"     placeholder='Age'              {...register("age")}              className="form-control"/>
                <p>{errors.age?.message}</p>
                <input type="password" placeholder='Password'         {...register("password")}         className="form-control"/>
                <p>{errors.password?.message}</p>
                <input type="password" placeholder='Confirm Password' {...register("confirmPassword")}  className="form-control"/>
                <p>{errors.fullName?.message}</p>


                <button className='btn btn-primary'>Submit</button>
            </form>
        </>
    )
}

export default FormHooks