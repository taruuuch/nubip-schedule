import "./Search.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import AppState from "../../redux/reducers";
import { requestSearch } from "../../redux/search/actions";

class SearchFrom extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: '',
			submitted: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSearchChange = this.handleSearchChange.bind(this);
	}

	handleSubmit = event => {
		event.preventDefault();

		this.setState({ submitted: true });
		const { searchValue } = this.state;

		if (searchValue)
			this.props.search(searchValue);
	};

	handleSearchChange = event => {
		this.setState({ searchValue: event.target.value });
	};

	render = () => {
		return (
			<section className="search__container">
				<form className="search__form" onSubmit={this.handleSubmit}>
					<div className="search__form-input">
						<input
							className="input"
							type="text"
							name="search"
							id="search"
							placeholder="Input search value..."
							onChange={this.handleSearchChange}
						/>
					</div>
					<div className="search__form-button">
						<button className="btn btn-search" type="submit">
							<svg class="svg-inline--fa fa-search fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
							</svg>
						</button>
					</div>
				</form>
			</section>
		);
	};
}

const mapStateToProps = (state = AppState) => {
	const search = state.search;
	return {
		isLoading: search.isLoading,
		hasErrors: search.hasErrors
	};
};

export default connect(
	mapStateToProps,
	{ requestSearch }
)(SearchFrom);
