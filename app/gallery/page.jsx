"use client";
import PageHeading from "@/app/ui/PageHeading";
import Spacing from "@/app/ui/Spacing";
import MasonryGallery from "@/app/ui/Gallery/MasonryGallery";

export default function GalleryPage() {
  return (
    <>
      <PageHeading
        title="Gallery"
        bgSrc="/images/team_hero_bg.jpeg"
        pageLinkText="Gallery"
      />
      <Spacing lg="145" md="80" />
      <MasonryGallery />
      <Spacing lg="70" md="50" />
    </>
  );
}
