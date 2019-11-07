import { SearchState } from './types';
import {
	SEARCH,
	SEARCH_SUCCEEDED,
	SEARCH_FAILED
} from '../../constants/search';

const initialState = SearchState;

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
			case SEARCH: {
				return {
					value: action.value,
					loading: true,
					error: false,
					result: []
				};
			}
			case SEARCH_SUCCEEDED: {
				return  {
					value: action.value,
					loading: false,
					error: false,
					result: action.result
				};
			}
			case SEARCH_FAILED: {
				return  {
					value: action.value,
					loading: false,
					error: action.error,
					result: []
				};
			}
			default:
				return state;
	}
};
