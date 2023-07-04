import { useEffect, useReducer } from "react";

interface Action<T> {
  type: "INIT_REQUEST" | "REQUEST_FAILURE" | "REQUEST_SUCCESS";
  payload?: {
    error?: any;
    data?: T | null;
  };
}

interface State<T> {
  loading: boolean;
  data?: T | null;
  error: any;
}

const createGetDataReducer =
  <T>() =>
  (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "INIT_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
          data: null,
        };
      case "REQUEST_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload ? action.payload.error : null,
          data: null,
        };
      case "REQUEST_SUCCESS":
        return {
          ...state,
          loading: false,
          error: null,
          data: action.payload ? action.payload.data : null,
        };
    }
  };

// Custom hook
export function useGetData<T>(API_URL: string) {
  const reducer = createGetDataReducer<T>();
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    requestData();
  }, []);

  async function requestData() {
    try {
      dispatch({ type: "INIT_REQUEST" });
      const response = await fetch(API_URL);
      const json = await response.json();

      if (json.error) {
        dispatch({ type: "REQUEST_FAILURE", payload: { error: json.error } });
      } else {
        dispatch({ type: "REQUEST_SUCCESS", payload: { data: json } });
      }
    } catch (e) {
      console.error("error", e);
    }
  }

  return { data: state.data, error: state.error, loading: state.loading };
}
