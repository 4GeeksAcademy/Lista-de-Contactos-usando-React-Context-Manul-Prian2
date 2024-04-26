import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";
import { Context } from "../store/appContext";



export const EditContact =() => {
        const { id } = useParams();
        const {store, actions} = useContext(Context);
        const [userInputTwo, setUserInputTwo] = useState({
            nombredos: "",
            correodos: "",
            telefonodos: "",
            direcciondos: ""
        });

    const navigate = useNavigate();
    
        const handleSubmit = (e) => {
            e.preventDefault();
           if (actions.EditContact(id, userInputTwo)) navigate("/") // Llamar a la función EditContact con el ID y los datos del formulario
        
        };
    return (
<>
<form onSubmit={e => handleSubmit(e)}>
    <div className="container mt-5">
        <div className="mt-5">
        
            <label className="form-label d-flex text-start">
            <i className="fa fa-user bigicon mx-2" style={{color: "#B197FC",fontSize : 24}}></i>  
            Full Name
            </label>
            <input type="text" 
            className="form-control" 
            minLength={3} 
            required={true} 
            value={userInputTwo.nombredos}
            onChange={(e) => setUserInputTwo({ ...userInputTwo, nombredos: e.target.value })}
            placeholder="full Name" />
        </div>
        <div className="my-3">
            <label  className="form-label d-flex text-start">
                <i className="fas fa-envelope mx-2" style={{color: "#B197FC",fontSize : 24}}></i>
                Email
            </label>
            <input type="email" 
            className="form-control" 
            minLength={3} 
            required={true}
            value={userInputTwo.correodos}
            onChange={(e) => setUserInputTwo({ ...userInputTwo, correodos: e.target.value })}
            placeholder="name@example.com" />
        </div>
        <div className="my-3">
            <label  className="form-label d-flex text-start">
                <i className="fas fa-phone-square mx-2" style={{color: "#B197FC",fontSize : 24}}></i>
                Phone
            </label>
            <input type="text" 
            className="form-control"
            minLength={3} 
            required={true}
            value={userInputTwo.telefonodos}
            onChange={(e) => setUserInputTwo({ ...userInputTwo, telefonodos: e.target.value })}
            placeholder="+34-666-66-66-66" />
        </div>
        <div className="my-3">
            <label className="form-label d-flex text-start">
                <i className="fas fa-map-marker-alt mx-2" style={{color: "#B197FC", fontSize : 24}}></i>
                Address
            </label>
            <input type="text" 
            className="form-control" 
            minLength={3} 
            required={true}
            value={userInputTwo.direcciondos} 
            onChange={(e) => setUserInputTwo({ ...userInputTwo, direcciondos: e.target.value })}
            placeholder="Address" />
        </div>
        <div className="d-flex justify-content-center ">
            <input type="submit" value={"Edit Contact"} className="btn btn-primary mx-3"></input>
            <Link to="/">
                <button className="btn btn-primary mx-3">Back home</button>
            </Link>
        </div>
    </div>
           
</form>
</>      

    )
}