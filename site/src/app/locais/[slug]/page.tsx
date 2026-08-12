import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GrowthLanding } from "@/components/growth-page";
import { locations } from "@/lib/growth-content";
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return locations.map(({slug})=>({slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const page=locations.find(x=>x.slug===slug);if(!page)return{};return{title:page.title,description:page.description,alternates:{canonical:`/locais/${slug}`}};}
export default async function Page({params}:Props){const {slug}=await params;const page=locations.find(x=>x.slug===slug);if(!page)notFound();return <GrowthLanding page={page} path={`/locais/${slug}`}/>;}
