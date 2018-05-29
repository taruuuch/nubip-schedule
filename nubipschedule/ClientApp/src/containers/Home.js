import React, { Component } from 'react';
import { SearchForm } from "../components/SearchForm";

export class Home extends Component {
	displayName = Home.name
	
	render() {
		return (
            <div>
				<SearchForm />
            </div>
		);
	}
}