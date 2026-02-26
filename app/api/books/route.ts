import { NextResponse } from "next/server";
import GoodreadsShelf from "goodreads-bookshelf-api";

const currentlyReading = new GoodreadsShelf({
  username: process.env.GOODREADS_USER || "",
  shelf: "currently-reading",
});

const read = new GoodreadsShelf({
  username: process.env.GOODREADS_USER || "",
  shelf: "read",
});

const toDisplay = new GoodreadsShelf({
  username: process.env.GOODREADS_USER || "",
  shelf: "site",
});

export async function GET() {
  try {
    const currentBooks = await currentlyReading.fetch();
    const toDisplayBooks = await toDisplay.fetch();
    const readBooks = await read.fetch();

    const data = {
      currentlyReading: currentBooks,
      toDisplay: toDisplayBooks,
      read: readBooks,
    };
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching books:", error);
    return NextResponse.json(
      { error: "Error fetching books" },
      { status: 500 },
    );
  }
}
