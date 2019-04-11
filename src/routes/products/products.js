import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

import ProductList from '../../components/productList/ProductList';

const Products = ({ dispatch, products, count }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: {
        id
      },
    });
  }

  function handleReduce(){
    dispatch({
      type: 'products/reduce'
    });
  }

  function handleAdd(){
    dispatch({
      type: 'products/add'
    });
  }
  
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
      <div>
        <Button onClick={handleReduce}>-</Button>{count}<Button onClick={handleAdd}>+</Button>
      </div>
        
    </div>
  );
};

// export default Products;
function mapStateToProps(state){
  return{
    products: state.products.list,
    count: state.products.count
  }
}
export default connect(mapStateToProps)(Products);