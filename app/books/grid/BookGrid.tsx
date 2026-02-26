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

export default function BookGrid() {
  const [books, setBooks] = useState<BooksData | null>(null);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  if (!books) return null;

  type Cell =
    | { type: "label"; text: string }
    | { type: "book"; book: Book };

  const cells: Cell[] = [];

  if (books.currentlyReading?.length) {
    cells.push({ type: "label", text: "Currently Reading" });
    cells.push(...books.currentlyReading.map((book: Book) => ({ type: "book" as const, book })));
  }
  if (books.toDisplay?.length) {
    cells.push({ type: "label", text: "Read" });
    cells.push(...books.toDisplay.map((book: Book) => ({ type: "book" as const, book })));
  }

  return (
    <div className="flex flex-wrap gap-4">
      {cells.map((cell, i) =>
        cell.type === "label" ? (
          <div
            key={`label-${i}`}
            className="flex h-48 w-36 items-center justify-center"
          >
            <p className="text-4xl rotate-270">{cell.text}</p>
          </div>
        ) : (
          <Link
            key={cell.book.guid}
            href={cell.book.bookLink}
            target="_blank"
            className="block h-48 w-36"
          >
            <Image
              src={cell.book.imageLink}
              alt={cell.book.title}
              width={96}
              height={144}
              className="h-full w-full object-scale-down"
            />
          </Link>
        ),
      )}
    </div>
  );
}
