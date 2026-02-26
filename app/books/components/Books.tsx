"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Book {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string | null;
  guid: string;
  isoDate: string;
  author: string;
  name: string;
  averageRating: number;
  bookPublished: string;
  rating: number | null;
  readAt: string | null;
  dateAdded: string;
  shelves: string[];
  review: string | null;
  imageLink: string;
  bookLink: string;
}
    
interface BooksData {
  currentlyReading?: Book[];
  toDisplay?: Book[];
}

export default function BookDisplay() {
  const [books, setBooks] = useState<BooksData | null>(null);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  if (!books) return null;

  return (
    <>
      <div className="text-black">
        <p className="text-lg py-1 pb-2">I{"'"}m currently reading:</p>
        <div className="flex flex-row gap-4">
          {books.currentlyReading?.map((book: Book) => (
            <Link key={book.guid} href={book.bookLink} target="_blank">
              <div key={book.guid} className="flex flex-col w-24">
                <Image
                  src={book.imageLink}
                  alt={book.title}
                  width={128}
                  height={128}
                  className="object-cover"
                />
                <p className="text-sm pt-1">{book.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-xl pt-2">
          Here{"'"}s a list of books on my bookshelf:
        </p>
        {books.toDisplay?.map((book: Book) => (
          <div key={book.guid} className="flex items-center gap-4 py-4 text-xl">
            <Link href={book.bookLink} target="_blank" className="underline">
              {book.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}