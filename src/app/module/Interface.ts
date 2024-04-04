

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

export interface authStore{
  token: any,
  email: string,
  password: string
}

export interface Task {
  // type the collection fields you want to use...
  id:   string;
  name: string;
}
 export interface items{

 }
