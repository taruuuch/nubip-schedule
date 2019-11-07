import React, { Component } from 'react';
import './Search.scss';

class SearchFrom extends Component {
	constructor() {
		super();
		this.state = {
			searchValue: ''
		};
	}

	render = () => {
		return (
			<section className='search__container'>
				<form className='search__form' onSubmit={this.handleSubmit}>
					<div className='search__form-group'>
						<input className='input' type='text' name='search' id='search' placeholder='Input search value...'/>
					</div>
					<div className='search__form-group'>
						<button className='btn btn-search' type='submit'>
							Search
						</button>
					</div>
				</form>
			</section>
		);
	};
};

export default SearchFrom;
