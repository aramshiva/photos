import Link from "next/link";
import BookDisplay from "./components/Books";

export default function Books() {
  return (
    <>
      <div className="p-9 md:p-20">
        <div className="pb-5">
          <p className="text-4xl font-medium">Bookshelf</p>
          <p className="text-2xl">Aram Shiva</p>
          <p className="text-zinc-800 text-lg pt-2">
            Select books I have read, or are on my bookshelf. Pulled from my{" "}
            <Link
              href={`https://www.goodreads.com/user/show/${process.env.GOODREADS_USER}`}
              className="underline"
            >
              Goodreads
            </Link>.
          </p>
          <BookDisplay />
        </div>
      </div>
    </>
  );
}
