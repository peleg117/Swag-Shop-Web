import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Product from '../product/product';
import WishList from '../wishlist/wishlist'

//Services
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {products:[]};
		
		this.loadData = this.loadData.bind(this);
		this.productList = this.productList.bind(this);
		
		this.loadData();
		
	}
	
	loadData = () => {
		var self = this;
		http.getProducts().then(data => {
			self.setstate({products: data})
	}, err => {
		
	});
}
	
	ProductList = () => {
		const list = this.state.products.map((Product) => 
			<div className="col-sm-4" key={product._id}>
			<product product={productl}/>
			</div>
		
	);
		return (list);
	}
	
render () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and Swag to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
		  <div className=" container-fluid App-main">
			<div className="row">
				<div className="col-sm-8">
				<div className="row">
					  {this.productList()}
					</div>
				</div>
			
			  </div>
			  <div className="col-sm-4">
			  	<WishList />
			  </div>
		  </div>
      </header>
    </div>
  );
}

export default App;
