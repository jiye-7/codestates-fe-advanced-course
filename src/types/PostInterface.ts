export interface IPostInterface {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface IComments {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}
