import React, {Component} from 'react';
import './product-condensed.css';
import DataService from '../services/data-service';

let ds = new DataService();

class ProductCondensed extends Component {
	
	constructor(props) {
		super(props);
		
		this.removeProduct = this.removeProduct.bind(this);
	}
	
	render() {
		return (
		<div className="card product">
		<li className="list-group-item">
			<a className="btn btn-outline-danger" onClick={() => this.removeProduct()}>X</a><p>{this.props.product.title} | ${this.props.product.price}</p>
			
				
				</li>
			);
	}
}

export deafult ProductCondensed;