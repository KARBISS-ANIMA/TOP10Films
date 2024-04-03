import PocketBase, {RecordService} from 'pocketbase';

export interface filmListInterface{
  page: number
  results: [];
}

export interface films{
  adult: boolean,
  backdrop_path: string,
  genre_ids:[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}
 export interface favorList{
  media_type: string,
   media_id: number,
   favorite: boolean
 }

 export interface numberPage{
  page:number
 }

interface Task {
  id:   string;
  name: string;
}

interface Post {
  id:     string;
  title:  string;
  active: boolean;
}

interface TypedPocketBase extends PocketBase {
  collection(idOrName: string): RecordService // default fallback for any other collection
  collection(idOrName: 'tasks'): RecordService<Task>
  collection(idOrName: 'posts'): RecordService<Post>
}

interface data{
  "username": string,
  "email": string,
  "emailVisibility": true,
  "password": string,
  "passwordConfirm": string,
  "name": "test"
}
