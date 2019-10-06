
export interface UserOptions {
  
  username: string;
  password: string;
  email: string;

  constructor(public username: string, public password: string, public email: string) {}

}