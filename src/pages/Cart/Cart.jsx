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



const Cart = () => {

const { listaCarrito, vaciarCarrito, precioTotal, eliminarProducto} = useCartContext()

  
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
                        <MDBTypography tag="h4" className="text-black ">
                        {producto.descripcion}
                        
                        <MDBTypography tag="h6" style={{ color: "#DC3545" }}>
                          Precio: ${producto.precio}
                          </MDBTypography>
                        </MDBTypography>
                        <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                          Codigo: {producto.codigo}
                          <MDBTypography tag="h6" style={{ color: "#DC3545" }}>
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
                      Metodo de Pago
                    </MDBTypography>

                    <form className="mb-5">
                      <MDBInput
                        className="mb-5"
                        label="Numero Tarjeta"
                        type="text"
                        size="lg"
                        defaultValue="1234 5678 9012 3457"
                      />

                      <MDBInput
                        className="mb-5"
                        label="Nombre Completo"
                        type="text"
                        size="lg"
                        defaultValue="Martin Exequiel Calo"
                      />

                      <MDBRow>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Fecha de Expiración"
                            type="text"
                            size="lg"
                            minLength="7"
                            maxLength="7"
                            defaultValue="01/22"
                            placeholder="MM/YYYY"
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Cvv"
                            type="text"
                            size="lg"
                            minLength="3"
                            maxLength="3"
                            placeholder="&#9679;&#9679;&#9679;"
                            defaultValue="&#9679;&#9679;&#9679;"
                          />
                        </MDBCol>
                      </MDBRow>

                      <p className="mb-5">
                        Al darle a boton Comprar está aceptando nuestros
                        <a href="#!" className="text-danger"> Términos y Condiciones</a>.
                      </p>

                      <MDBBtn block size="lg" className="finalizar-compra bg-danger">
                        Finalizar Compra
                      </MDBBtn>

                      <MDBTypography
                        tag="h5"
                        className="fw-bold mb-5 text-danger"
                        style={{ position: "absolute", bottom: "0" }}
                      >
                        <a href="/categoria/" className="text-danger">
                          <MDBIcon icon="angle-left" />
                          Volver a la tienda
                        </a>
                      </MDBTypography>
                    </form>
                  </MDBCol>
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