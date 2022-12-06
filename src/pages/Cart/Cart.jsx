import { useCartContext } from "../../Context/CartContext"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import Swal from 'sweetalert2'




const Cart = () => {
  const [ formulario, setFormulario ] = useState({
  nombre:'',
  email: '',
  repetirEmail: '',
  telefono: ''
  
})

const { listaCarrito, vaciarCarrito, precioTotal, eliminarProducto} = useCartContext()


const finalizarCompra = (evt) => {
  evt.preventDefault()
  let compra = {}
  compra.cliente = formulario
  compra.total = precioTotal()
  compra.productostienda = listaCarrito.map((producto ) => {
    return{ 
                                                              id: producto.id, 
                                                              Descripcion:producto.descripcion, 
                                                              Cantidad:producto.cantidadAgregada, 
                                                              Precio:producto.precio
                                                            }
  }) 

  
  const db = getFirestore()
  const queryCompras = collection(db, 'compras')
  addDoc(queryCompras, compra)
  .then (compra => { 
    const idCompra = (compra.id)
    Swal.fire({
      title: "El total de su compra es $" + precioTotal().toFixed(2),
      text: "Gracias por comprar en FRANPAPEL SRL. Su codigo de compra es:  " + idCompra,
      icon: "success",
      confirmButtonText : "Acepto",
      confirmButtonColor : "green",
      timer: 5000,
      imageHeight: 400,
      imageAlt: ``  
    })
    
  })
  .finally(()=> {   
    vaciarCarrito()
    setFormulario({ 
    nombre:'',
    email: '',
    repetirEmail: '',
    telefono: ''
   })
  })
}

const handleOnChange = (evt) => {
evt.target.name
evt.target.value

setFormulario({
  ...formulario,
  [evt.target.name]: evt.target.value

})
}
  
  return (
    <div>  
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBRow>
                  <MDBCol lg="7" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      
                      
                      Carrito de Compras
                    </MDBTypography>
                    {listaCarrito.length != 0 ? <>
                    <ul>
                    {listaCarrito.map((producto) =>  <li key={producto.id}>
                    
                    <div className="d-flex align-items-center mb-5">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src= {producto.imagen}
                          fluid
                          style={{ width: "150px" }}
                          alt="Generic placeholder image"
                        />
                      </div>

                      <div className="flex-grow-1 ms-3">
                        <a href="#!" className="float-end text-black">
                          <MDBIcon fas icon="times" />
                        </a>
                        <MDBTypography tag="h5" className="text-black ">
                        {producto.descripcion}
                        
                        <MDBTypography  style={{ color: "#DC3545" }}>
                          Precio: ${producto.precio}
                          </MDBTypography>
                        </MDBTypography>
                        <MDBTypography  style={{ color: "#9e9e9e" }}>
                          Codigo: {producto.codigo}
                          <MDBTypography  style={{ color: "#DC3545" }}>
                          Cantidad: {producto.cantidadAgregada}
                          </MDBTypography>
                        </MDBTypography>
                        
                          <button onClick={ ()=> eliminarProducto(producto.id)} className="btn btn-danger bi-trash" > Elminar Producto
                             </button>
                       

                        
                      </div>
                    </div>
                    </li>
                    )}
                    </ul>
                   <button className="bg-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <hr
                      className="mb-4"
                      style={{
                        height: "2px",
                        backgroundColor: "#1266f1",
                        opacity: 1,
                      }}
                    />

                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#e1f5fe" }}
                    >
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Total:
                      </MDBTypography>
                      <MDBTypography  className="fw-bold mb-0">
                        ${precioTotal().toFixed(2)}
                      </MDBTypography>
                    </div>
                        </>
                      :
                      <h4>CARRTITO VACIO
                     
                        <a href="/categoria/" className="text-danger">
                          <br />
                          <br />
                          <br /> Volver a la tienda
                        </a>
                        </h4>

                      
}
                  </MDBCol>
                  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Datos de Pago
                    </MDBTypography>

                    <form className="mb-5" onSubmit={finalizarCompra}>
                      
                      <MDBInput
                        name="nombre" 
                        type="text"
                        className="mb-5"
                        size="lg"
                        onChange={handleOnChange}
                        placeholder="Nombre y Apellido"
                        value={formulario.nombre}
                        required
                      />

                      <MDBInput
                        name="email"
                        type="text"
                        className="mb-5"
                        size="lg"
                        onChange={handleOnChange}
                        placeholder="E-mail"
                        value={formulario.email}
                        required
                      />
                      <MDBInput
                        name="repetirEmail"
                        type="text"
                        className="mb-5"
                        size="lg"
                        placeholder="Repetir E-mail"
                        onChange={handleOnChange}
                        value={formulario.repetirEmail}
                        required
                      />
                      <MDBInput
                        name="telefono"
                        type="tel"
                        className="mb-5"
                        size="lg"
                        placeholder="Teléfono"
                        onChange={handleOnChange}
                        value={formulario.telefono}
                        required
                      />
                      

                      <div className="mb-5">
                        Al darle a boton Comprar está aceptando nuestros
                        <a href="#!" className="text-danger"> Términos y Condiciones</a>.
                      </div>
                      <MDBTypography
                        tag="h5"
                        className="fw-bold mb-5 text-danger"
                        style={{ position: "absolute", bottom: "0" }}
                      >
                        <a href="/categoria/" className="text-danger">
                          <MDBIcon icon="angle-left" />
                          Volver a la tienda    
                        </a>
                        <br />
                      </MDBTypography>
                    </form>

                  </MDBCol>
                  <button className="bg-danger"  onClick={finalizarCompra} >Finalizar Compra</button>
                </MDBRow>
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        
      </MDBContainer>
    </section>
   </div>
   
  )

}

export default Cart