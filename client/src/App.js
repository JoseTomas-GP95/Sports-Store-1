import React from 'react';

// import logo from './logo.svg';

import './App.css';
import Routes from './Routes';


function App() {
  // const products= useSelector(state => state.products)

  // function onFilterId(Id) {
  //   var productId = products.filter(products=> products.id == Id)
  //   if (productId !== undefined) {
  //     return productId [0];
  //   } else {
  //     return null;
  //   }
  // }
  return (
    <div className="App">
      <Routes />
      {/* <NavBar /> */}
      {/* <Route
        exact path='/product'
        render={() => <Product />}
      /> */}


      {/* S14 : Crear Ruta para mostrar el componente Catalogo */}
      {/* <Route
        exact path='/products'
        render={() => <Products />}
      /> */}
      {/* S15 : Crear Ruta para ver el detalle de un producto según el id. */}
      {/* <Route
          exact path='/products/:id'
          render={({ match }) => <Product productName={onFilterId(match.params.id)} />}
        /> */}

      {/* <CreateProduct /> */}

    </div>
  );
}

export default App;
