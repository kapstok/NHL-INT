/*
	Default interface which need to be implemented by every program
	that is used by either buddy or client.
*/
export default interface IProgram {
	execute(args: string[]): string;
}
