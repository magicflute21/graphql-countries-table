const fetchData = async <T>(url: string, query: string): Promise<T> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`Network connection failure, status code: ${response.status}`);
  }

  const result = await response.json();

  if (result.errors) {
    throw new Error(result.errors.map((err: { message: string }) => err.message).join(', '));
  }

  return result.data;
};

export { fetchData };