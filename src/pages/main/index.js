import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    state = {
        products: []
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/pokemon?offset=300&limit=100');
        console.log(response.data.results);

        this.setState({ products: response.data.results });
       
    };

    
    
    //render(){
        //return <h1>Quantidade de Pokemon: {this.state.products.length}</h1>
    //}

    render(){
        const { products } = this.state

        return(
            <div className='product-list'>
                {this.state.products.map(products => (
                    //<h2 key={products._id}>{products.name}</h2>
                    <article key={products._id}>
                        <strong>{products.name}</strong>
                        <p>{products.description}</p>

                        <a href=''>Comprar</a>
                    </article>                    
                ))}
                
            </div>
        );
    }
}