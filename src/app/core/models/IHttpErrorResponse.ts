export interface IHttpErrorResponse {
  error: any;         // body of the response from the server (may contain JSON error)
  status: number;     // HTTP status code, e.g., 401
  statusText: string; // e.g., "Unauthorized"
  message: string;    // Angular-generated message
  name: string;       // "HttpErrorResponse"
  ok: false           // always false
  url: string         // requested URL
}
