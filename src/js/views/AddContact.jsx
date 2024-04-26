import React, { useContext, useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";



export const AddContact =() => {
    const {store, actions} = useContext(Context);
    const [userInput, setUserInput] = useState([]);

    const navigate = useNavigate();


    const handleSubmit = e => {
        e.preventDefault();
           actions.CreateContact(userInput);
            navigate("/")
    };
    return (
<>
<form onSubmit={e => handleSubmit(e)}>
    <div className="container mt-5">
    <div className="mt-5">
        
            <label className="form-label d-flex text-start">
            <i className="fa fa-user bigicon mx-2" style={{color: "#87CEEB",fontSize : 24}}></i>  
            Nombre completo
            </label>
            <input type="text" 
            className="form-control" 
            minLength={3} 
            required={true} 
            value={userInput.nombre}
            onChange={(e) => setUserInput({ ...userInput, nombre: e.target.value })}
            placeholder="Nombre completo aquí" />
        </div>
        <div className="my-3">
            <label  className="form-label d-flex text-start">
                <i className="fas fa-envelope mx-2" style={{color: "#87CEEB",fontSize : 24}}></i>
                Email
            </label>
            <input type="email" 
            className="form-control" 
            minLength={3} 
            required={true}
            value={userInput.correo}
            onChange={(e) => setUserInput({ ...userInput, correo: e.target.value })}
            placeholder="nombre@ejemplo.com" />
        </div>
        <div className="my-3">
            <label  className="form-label d-flex text-start">
                <i className="fas fa-phone-square mx-2" style={{color: "#87CEEB",fontSize : 24}}></i>
                Telefono
            </label>
            <input type="text" 
            className="form-control"
            minLength={3} 
            required={true}
            value={userInput.telefono}
            onChange={(e) => setUserInput({ ...userInput, telefono: e.target.value })}
            placeholder="+34-xxx-xx-xx-xx" />
        </div>
        <div className="my-3">
            <label className="form-label d-flex text-start">
                <i className="fas fa-map-marker-alt mx-2" style={{color: "#87CEEB", fontSize : 24}}></i>
                Dirección
            </label>
            <input type="text" 
            className="form-control" 
            minLength={3} 
            required={true}
            value={userInput.direccion} 
            onChange={(e) => setUserInput({ ...userInput, direccion: e.target.value })}
            placeholder="Dirección" />
    </div>
    </div>
    <div className="d-flex justify-content-center ">
            <input type="submit" value={"Agregar Contanto"} className="btn btn-primary mx-3"></input>
            <Link to="/">
                <button className="btn btn-primary mx-3">Back home</button>
            </Link>
    </div>
</form>

</>      

    )
}