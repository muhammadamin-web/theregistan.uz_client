export interface TUser {
  id?: string;
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  image?: string | null;
  phone?: string;
  organization?: TOrganization;
  region?: string;
  district?: string;
  favorites?: string;
  isOrganization?: boolean;
  password?: string;
}
export interface TOrganization {
  _id: string;
  name: string;
  email: string;
  address: string;
  image: string;
  phones: {
    phone1: string;
    phone2: string;
    phone3: string;
  };
  media: {
    instagram: string;
    telegram: string;
    site: string;
  };
  user: TUser;
  region: string;
  district: string;
  isArchive: boolean;
  categories: string;
  subcategories1: string;
  subcategories2: string;
  description: string;
  is_active: boolean;
}
export type TToken = string | undefined;
export type TData = {
  organization?: TOrganization;
  user?: TUser;
  token?: TToken;
};
export interface CategoryProps {
  _id: string;
  name?: string;
  image?: string;
  subcategories?: SubCategoryProps[];
  isArchive: boolean;
}
export interface SubCategoryProps {
  _id: string;
  name?: string;
  image?: string;
  category?: CategoryProps;
  subcategories?: SubCategory2Props[];
  isArchive: boolean;
}
export interface SubCategory2Props {
  _id: string;
  name?: string;
  image?: string;
  subcategory?: SubCategoryProps;
  isArchive: boolean;
}
export interface sData {
  title: string;
  desc: string;
  img: string;
  buttonTxt: string;
  link: string;
  reverse: boolean;
  bg: string;
}
