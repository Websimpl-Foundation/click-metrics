/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';

interface CardComponent {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

const cardContent: CardComponent[] = [
  {
    id: 0,
    title: 'URL Shortener',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, reiciendis quis. Nulla quas corporis quis recusandae dolor praesentium consequuntur sapiente.",
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 1,
    title: 'QR Generator',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, reiciendis quis. Nulla quas corporis quis recusandae dolor praesentium consequuntur sapiente.",
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Link-in-Bio',
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, reiciendis quis. Nulla quas corporis quis recusandae dolor praesentium consequuntur sapiente.",
    imageUrl: 'https://via.placeholder.com/150'
  },
];

const CardUtil: React.FC = () => {
  return (
    <>
        {cardContent.map((card) => (
          <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-8 sm:mb-0" key={card.id}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <img src={card.imageUrl} alt={card.title} className="w-full h-[15rem] py-4 sm:py-0" />
            <CardContent>
              <p>{card.content}</p>
            </CardContent>
            <CardFooter>
              <Button className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300" variant="secondary">Deploy</Button>
            </CardFooter>
          </Card>
        ))}
    </>
  );
};

export default CardUtil;



