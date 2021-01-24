export default class BaseApiError extends Error {
  constructor(
    public message: string,
    public status: number,
    public success: boolean
  ) {
    super(message);
  }
}
