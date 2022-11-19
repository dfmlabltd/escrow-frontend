import { AppProps } from "next/app";
import { NextPageWithLayout } from "./page";

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
