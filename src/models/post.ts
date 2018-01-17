import { UserData } from "./userdata";

export interface Post extends UserData{
  $key?: string,
  title: string;
  time: string;
  content: string;
}

//add ? means the key is optional
