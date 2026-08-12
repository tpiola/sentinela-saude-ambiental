import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GrowthLanding } from "@/components/growth-page";
import { markets } from "@/lib/growth-content";
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return markets.map(({slug})=>({slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const page=markets.find(x=>x.slug===slug);if(!page)return{};return{title:page.title,description:page.description,alternates:{canonical:`/mercados/${slug}`}};}
export default async function Page({params}:Props){const {slug}=await params;const page=markets.find(x=>x.slug===slug);if(!page)notFound();return <GrowthLanding page={page} path={`/mercados/${slug}`}/>;}
