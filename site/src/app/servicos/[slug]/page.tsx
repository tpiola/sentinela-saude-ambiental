import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GrowthLanding } from "@/components/growth-page";
import { services } from "@/lib/growth-content";
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return services.map(({slug})=>({slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const page=services.find(x=>x.slug===slug);if(!page)return{};return{title:page.title,description:page.description,alternates:{canonical:`/servicos/${slug}`},openGraph:{title:page.title,description:page.description,url:`/servicos/${slug}`}};}
export default async function Page({params}:Props){const {slug}=await params;const page=services.find(x=>x.slug===slug);if(!page)notFound();return <GrowthLanding page={page} path={`/servicos/${slug}`}/>;}
