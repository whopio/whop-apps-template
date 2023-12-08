import type { PropsWithChildren } from "react";

export type PageProps<
  Params extends string = never,
  Query extends string = string
> = {
  params: Record<Params, string>;
  searchParams: Record<Query, string | undefined>;
};

export type LayoutProps<
  Params extends string = never,
  Query extends string = string
> = PropsWithChildren<PageProps<Params, Query>>;
