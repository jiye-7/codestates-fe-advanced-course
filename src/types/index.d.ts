// import axios, { AxiosError } from 'axios';

interface AxiosError {
	data: string;
}

/* interface IErrorBase {
	error: Error | AxiosError;
	type: 'axios-error';
}

interface IAxiosError extends IErrorBase {
	error: AxiosError;
	type: 'axios-error';
}

function axiosErrorHandler(callback: (err: IAxiosError) => void) {
	return (error: Error | IAxiosError) => {
		if (axios.isAxiosError(error)) {
			return { error, type: 'axios-error' };
		}
	};
} */
