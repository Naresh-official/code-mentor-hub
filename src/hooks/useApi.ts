import { useState, useEffect, useCallback } from "react";
import { ZodError } from "zod";
import axios, { AxiosRequestConfig } from "axios";

interface UseApiState<T> {
	data: T | null;
	error: string | null;
	loading: boolean;
}

function useApi<T = unknown>(url: string, config?: AxiosRequestConfig) {
	const [state, setState] = useState<UseApiState<T>>({
		data: null,
		error: null,
		loading: false,
	});

	const fetchData = useCallback(async () => {
		setState({ data: null, error: null, loading: true });
		try {
			const response = await axios.request<T>({ url, ...config });
			setState({ data: response.data, error: null, loading: false });
		} catch (error: unknown) {
			if (error instanceof ZodError) {
				console.error("Validation Error:", error.errors);
				setState({
					data: null,
					error: error.errors[0]?.message || "Validation error",
					loading: false,
				});
			} else if (axios.isAxiosError(error)) {
				console.error("Axios Error:", error.response?.data?.error);
				setState({
					data: null,
					error: error.response?.data?.error || "API error",
					loading: false,
				});
			} else if (error instanceof Error) {
				console.error("General Error:", error.message);
				setState({
					data: null,
					error: error.message || "Unknown error",
					loading: false,
				});
			} else {
				console.error("Unexpected Error:", error);
				setState({
					data: null,
					error: "Unexpected error occurred",
					loading: false,
				});
			}
		}
	}, [url, config]);
	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { ...state, refetch: fetchData };
}

export default useApi;
