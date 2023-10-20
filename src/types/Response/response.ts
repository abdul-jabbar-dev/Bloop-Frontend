type TResponse = {
  data?: any;
  meta?: TMeta;
};
export type TMeta = {
    page: number;
    limit: number;
    total: number;
};
export default TResponse