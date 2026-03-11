import React from "react";
import { useParams, Navigate } from "react-router";
import { GenericPage } from "@/components/marketing-site/landing/GenericPage";
import { PAGE_CONTENT } from "@/components/marketing-site/landing/page-content";

export default function GenericMarketingPage() {
  const { pageId } = useParams<{ pageId: string }>();

  // If the page doesn't exist in our content map, we could 404, 
  // but GenericPage already handles "Coming Soon" for unknown pages.
  return <GenericPage pageId={pageId || ""} />;
}