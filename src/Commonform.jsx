import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

const Commonform = ({ count }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const handle = () => {

        axios.get(`http://localhost:8000/posts?_limit=${count}`).then((res) => {
            console.log(res.data);
        })

    }

 
    return (
        <div>
            <form>
              
                <button  onClick={handleSubmit(handle)} type="submit">Submit</button>
            </form>

         

        </div>
    )
}

export default Commonform
