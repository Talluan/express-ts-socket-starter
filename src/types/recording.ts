export interface Response extends Express.Response {    
	httpStatus: number;
	message: string;
}