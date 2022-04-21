class ErrorBuilder {
  public readonly name: string;

  public readonly message: string;

  public readonly statusCode: number;

  public readonly details: any;

  constructor(name: string, message: string, statusCode = 400, details: any) {
    this.name = name;
    this.message = message;
    this.statusCode = statusCode;
    this.details = details;
  }
}

export default ErrorBuilder;
