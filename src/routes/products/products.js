import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

import ProductList from '../../components/productList/ProductList';

const Products = (props) => {
  function handleDelete(id) {
    props.dispatch({
      type: 'products/delete',
      payload: {
        id
      },
    });
  }

  function handleReduce(){
    props.dispatch({
      type: 'products/reduce'
    });
  }

  // function handleAdd(){
  //   dispatch({
  //     type: 'products/add'
  //   });
  // }
  function handleAddAfter1Second(){
    props.dispatch({
      type: 'products/addAfter1Second'
    });
  }
  
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={props.products} />
      <div>
        <Button onClick={handleReduce}>-</Button>{props.count}<Button onClick={handleAddAfter1Second}>+</Button>
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