type TError = {
  statusCode: number;
  message: string;
  name: string;
  path?: { path?: string; message?: string };
};
export default TError