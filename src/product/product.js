import React, {Component} from 'react';
import './product.css';
import DataService from '../services/data-service';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service'; 


let ds = new DataService();
class Product extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {onWishList: ds.itemOnWishList()};
		
		this.onButtonClicked = this.onButtonClicked.bind(this);
		this.onWishListChanged = this.onWishListChanged.bind(this);
	}
	
	ComponentDidMount() {
		ns.observer(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
	}
	
	ComponentWillUnmount() {
		ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
	}
	
	onWishListChanged(newWishList) {
		this.setState{onWishList: ds.itemOnWishList(this.props.product)});
	}
	
	
	onButtonClicked = () => {
		if (this.state.onWishList) {
			ds.removeWishListItem(this.props.product);
		} else {
			ds.addWishListItem(this.props.product);
			
		}
		
	}
	render() {
		return (
		<div className="card product">
		<img className="card-img-top" src={this.props.product.imgUrl} alt="Product"></img>
			<div className="card-block">
			<h4 className="card-title">{this.props.product.title}</h4>
				<p className="card-text">Price: ${this.props.price}</p>
				<a href="#" onClick={() => this.buttononClicked()} className={btnClass}>{this.state.onWishList ? "Remove From Wishlist" : "Add To Cart"}</a>
			</div>
		</div>
			);
	}
}

export deafult Product;