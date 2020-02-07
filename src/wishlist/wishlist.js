import React, {Component} from 'react';
import './wishlist.css';
import DataService from '../services/data-service';
import NotificationService from '../services/notification-service';

import ProductCondensed from '../product-condensed/product-condensed';

class WishList extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {WishList: []};
		
		//Bind functions
		this.createWishList = this.createWishList.bind(this);
		this.onWishListChanged = this.onWishListChanged.bind(this);
	}
	
	ComponentDidMount() {
		ns.observer(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
	}
	
	ComponentWillUnmount() {
		ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
	}
	
	onWishListChanged(newWishList) {
		this.setState({WishList: newWishList});
	}
	
	createWishList = () => {
		const list = this.state.wishList.map(product)) => <ProductCondensed product={product} key={product_.id}/>
		
		);
		
		return (list);
	}
	render() {
	return (
	<div className="card">
		<div className="card-block">
			<h4 className="card-title">Wish List</h4>
			<ul className="list-group">
			{this.createWishList()}
			</ul>
			</div>
		</div>
	);
	{
		

export deafult WishList;