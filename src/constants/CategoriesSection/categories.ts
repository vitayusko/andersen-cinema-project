import { categoryImages } from './categoryImages';

export interface Category {
  id: number;
  title: string;
  images: string[];
}

export const categories: Category[] = [
  {
    id: 28,
    title: 'Action',
    images: categoryImages.action,
  },
   {
    id: 29,
    title: 'Adventure',
    images: categoryImages.adventure,
  },{
    id: 35,
    title: 'Comedy',
    images: categoryImages.comedy,
  },
  {
    id: 18,
    title: 'Drama',
    images: categoryImages.drama,
  },
  {
    id: 27,
    title: 'Horror',
    images: categoryImages.horror,
  },
  // {
  //   id: 878,
  //   title: 'Sci-Fi',
  //   images: categoryImages.sciFi,
  // },
];