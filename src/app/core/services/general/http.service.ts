/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  post: (url: string, headers: HeadersInit, body: any) => fetch(url, { headers, method: 'POST', body: JSON.stringify(body) }),
  get: (url: string, headers: HeadersInit) => fetch(url, { headers, method: 'GET' }),
  put: <T>(url: string, headers: HeadersInit,body: any): Promise<T> => fetch(url, { headers, method: 'PUT', body: JSON.stringify(body) }).then((response) => response.json()),
  delete: <T>(url: string, headers: HeadersInit): Promise<T> => fetch(url, { headers, method: 'DELETE' }).then((response) => response.json())
};