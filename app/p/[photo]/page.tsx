"use client";

import { useParams } from "next/navigation";
import PhotosPage from "../../components/Photos";
export default function PhotoPage() {
  const { photo } = useParams<{ photo: string }>();
  return <PhotosPage initialPhotoId={photo} />;
}
