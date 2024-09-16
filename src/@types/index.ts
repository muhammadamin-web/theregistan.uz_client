export interface ICat {
  name: string;
  _id: string;
}

export interface IPost {
  _id: string;
  title: string;
  category: ICat[];
  date: string;
  image: {
    _id: string;
    name: string;
  };
  isColored: boolean;
  readTime: number;
  reversed: boolean;
  bgColored: boolean;
  bgColor: string;
  textColor: string;
  customWidth: string;
  content: { data: string };
}

export interface Ibanner {
  _id: string;
  status: boolean;
  link: string;
  image: {
    _id: string;
    name: string;
  };
}
