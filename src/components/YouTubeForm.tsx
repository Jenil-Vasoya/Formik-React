import React from "react";
import { Formik, useFormik } from "formik";
import * as YUP from 'yup'


type ValueType = {
    name:string,
    email:string,
    channel:string
   } 
   const initialValues : ValueType = {
    name:"",
    email: "",
    channel:""
   }

   const onSubmit = (data:ValueType) => {
    console.log(data);
   }

   const validate = (data:ValueType) => {

        let errors : any ={};

        if(!data.name){
            errors.name = "Required";
        }
    
        if(!data.email){
            errors.email = "Required";
        }
        
        if(!data.channel){
            errors.channel = "Required";
        }
        console.log(errors);
        return errors;
    }

    const yup = YUP.object({
        name: YUP.string().required('Please enter name'),
        email: YUP.string().required('Please enter email'),
        channel: YUP.string().required('Please enter channel')
        
    })

    export const YouTubeForm = () => {

        const formik = useFormik({
            initialValues : initialValues,
            onSubmit:onSubmit,
            //validate : validate,
            validationSchema : yup

        })

        return(
            <div className="form-control">
                <form onSubmit={formik.handleSubmit}>
                    <div>
                    <label htmlFor="name">Name :</label>
                    <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />&nbsp;&nbsp;
                    {formik.errors.name ? <span className="error">{formik.errors.name}</span> : null}
                    </div>
                    

                    <div>
                    <label htmlFor="email">E-Mail :</label>
                    <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>&nbsp;&nbsp;
                    {formik.errors.email ? <span className="error">{formik.errors.email}</span> : null}
                    </div>
                    

                    <div>
                    <label htmlFor="channel">Channel :</label>
                    <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel}/>&nbsp;&nbsp;
                    {formik.errors.channel ? <span className="error">{formik.errors.channel}</span> : null}
                    </div>
                    

                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }