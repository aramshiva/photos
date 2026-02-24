import PhotosPage from "./components/Photos";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Photos by Aram Shiva',
  description: 'A collection of photos by Aram Shiva',
}

export default function Home() {

  return (
    <>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Photos"
          href="/feed.xml"
        />
      </head>
      <PhotosPage />
    </>
  );
}
