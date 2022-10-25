import { AppProps } from "next/app";
import { NextPageWithLayout } from "./page";

export type PropsWithChildren<Prop> = Prop & {
  children: React.ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
