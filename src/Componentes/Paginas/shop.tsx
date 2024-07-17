import React, { useState } from 'react';

const Shop: React.FC = () => {
  const [productList, setProductList] = useState<any[]>([]);
  const [objProducts, setObjProducts] = useState({
    id: '',
    nombre: '',
    unidad: '',
    talla: '',
    color: ''
  });
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      objProducts.nombre === '' ||
      objProducts.unidad === '' ||
      objProducts.talla === '' ||
      objProducts.color === ''
    ) {
      alert('¡Debe llenar todos los campos!');
      return;
    }

    if (editMode) {
      editProduct();
    } else {
      addProduct();
    }

    resetForm();
  };

  const addProduct = () => {
    const newProduct = { ...objProducts, id: Date.now().toString() };
    setProductList([...productList, newProduct]);
    cleanObject();
  };

  const editProduct = () => {
    const updatedList = productList.map(product => {
      if (product.id === objProducts.id) {
        return { ...objProducts };
      }
      return product;
    });
    setProductList(updatedList);
    setEditMode(false);
    resetForm();
  };

  const deleteProduct = (id: string) => {
    const updatedList = productList.filter(product => product.id !== id);
    setProductList(updatedList);
  };

  const loadProduct = (product: any) => {
    setObjProducts(product);
    setEditMode(true);
  };

  const resetForm = () => {
    setObjProducts({
      id: '',
      nombre: '',
      unidad: '',
      talla: '',
      color: ''
    });
  };

  const cleanObject = () => {
    setObjProducts({
      id: '',
      nombre: '',
      unidad: '',
      talla: '',
      color: ''
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <h1 style={{ marginLeft: '100px' }}>Pagina de Compra</h1>
        <div className="container">
            <div className="formulario">
                <h2>Ingreso de prendas</h2>
                <form id="formulario" onSubmit={handleSubmit}>
                    <input
                    type="text"
                    id="nombre-producto"
                    placeholder="Ingrese el tipo de prenda"
                    value={objProducts.nombre}
                    onChange={e => setObjProducts({ ...objProducts, nombre: e.target.value })}
                    />
            <input
              type="text"
              id="unidad-producto"
              placeholder="Ingrese unidades"
              value={objProducts.unidad}
              onChange={e => setObjProducts({ ...objProducts, unidad: e.target.value })}
            />
            <input
              type="text"
              id="talla-producto"
              placeholder="Ingrese la talla"
              value={objProducts.talla}
              onChange={e => setObjProducts({ ...objProducts, talla: e.target.value })}
            />
            <input
              type="text"
              id="color-producto"
              placeholder="Ingrese el color"
              value={objProducts.color}
              onChange={e => setObjProducts({ ...objProducts, color: e.target.value })}
            />
            <button type="submit" id="add-button">
              {editMode ? 'Actualizar' : 'Agregar'}
            </button>
          </form>
        </div>

        <div className="listado">
          <h2>Carrito de compra</h2>
          <div className="productos">
            {productList.map(product => (
              <div key={product.id}>
                <p>
                  {product.id} - Tipo: {product.nombre} - Unidad: {product.unidad} - Talla:{' '}
                  {product.talla} - Color: {product.color}
                </p>
                <button className="btn edit-button" onClick={() => loadProduct(product)}>
                  Editar
                </button>
                <button className="btn delete-button" onClick={() => deleteProduct(product.id)}>
                  Eliminar
                </button>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop
