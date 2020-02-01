// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id:   number
  name: string
}

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