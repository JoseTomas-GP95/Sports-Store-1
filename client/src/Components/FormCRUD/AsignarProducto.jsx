import React, { useState } from "react";
import {createProductCategory} from "../../actions"
import {useDispatch, useSelector} from "react-redux"

function AsignarProducto (){
    const dispatch=useDispatch();
    const productos = useSelector(state=>state.products);
    const categorias = useSelector(state=>state.categories);
    const [idProducto,setIdProducto] = useState();
    const [idCategoria,setIdCategoria] = useState()
    
    
    function asignar(e){             
        e.preventDefault()
        alert("Asignado producto "+idProducto+" a categoria "+idCategoria)
        dispatch(createProductCategory(idProducto,idCategoria))
    }


    return <div className="mt-2">
        <form onSubmit={(e)=>asignar(e)}>  
            <legend>Asignar categoria a producto</legend>
            <label className="m-1">Producto </label>
            <select onChange={(e) => setIdProducto(e.target.value)} className="m-2">
            <option disabled seleted >Producto</option>
                {productos&&productos.map(x=>{
                    return <option key={x.id+1} value={x.id}>{x.name}</option>
                })}
            </select>
            <label className="m-1">Categoria </label>
            <select onChange={(e) => setIdCategoria(e.target.value)} className="m-2">
            <option disabled seleted >Categorias</option>
                {categorias&&categorias.map(x=>{
                    return <option key={x.id+2} value={x.id}>{x.name}</option>
                })}
            </select>
            
            <button className="btn btn-primary" >Asignar</button>
        </form>        
</div>
}

export default AsignarProducto