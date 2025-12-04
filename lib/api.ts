type RequestOptions = {
  method?: "GET" | "POST";
  headers?: Record<string, string>;
  body?: any;
};

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = "GET", headers = {}, body } = options;

  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body && method !== "GET") {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(endpoint, config);

    if (!response.ok) {
      throw new ApiError(
        response.status,
        `API Error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new Error(`Network error: ${error}`);
  }
}

export const api = {
  get: <T>(endpoint: string, headers?: Record<string, string>): Promise<T> =>
    request<T>(endpoint, { method: "GET", headers }),

  post: <T>(
    endpoint: string,
    body?: any,
    headers?: Record<string, string>
  ): Promise<T> => request<T>(endpoint, { method: "POST", body, headers }),
};

