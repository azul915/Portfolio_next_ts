// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

// export type User = {
//   id:   number
//   name: string
// }

export type Skill = {
  category:        Array<{
    id:   number;
    name: string;
  }>;
  created_at:      string;
  detail:          string;
  duration:        number;
  name:            string;
  self_evaluation: number;
  term:            string;
}

export type Cont = {
  messages: string[];
}

export type Post = {
  rendered_body:   string;
  body:            string;
  coediting:       boolean;
  comments_count:  number;
  created_at:      Date;
  group:           Group;
  id:              string;
  likes_count:     number;
  private:         boolean;
  reactions_count: number;
  tags:            Tag[];
  title:           string;
  updated_at:      Date;
  url:             string;
  user:            User;
  page_views_count:number;
}

export type Group = {
  created_at: Date;
  id:         number;
  name:       string;
  private:    boolean;
  updated_at: Date;
  url_name:   string;
}

export type Tag = {
  name:     string;
  versions: string[];
}

export type User = {
  description:         string;
  facebook_id:         string;
  followees_count:     number;
  followers_count:     number;
  github_login_name:   string;
  id:                  string;
  items_count:         number;
  linkedin_id:         string;
  location:            string;
  name:                string;
  organization:        string;
  permanent_id:        number;
  profile_image_url:   string;
  team_only:           boolean;
  twitter_screen_name: string;
  website_url:         string;
}