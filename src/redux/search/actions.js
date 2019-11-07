import {
	SEARCH,
	SEARCH_SUCCEEDED,
	SEARCH_FAILED
} from '../../constants/search';

export const requestSearch = (value) => {
  return {
		type: SEARCH,
		value
	}
};

export const requestSearchSuccess = (value, data) => {
	return {
		type: SEARCH_SUCCEEDED,
		value,
		data
	}
};

export const requestSearchError = (value, error) => {
  return {
		type: SEARCH_FAILED,
		value,
		error
	}
};
