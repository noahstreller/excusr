import { ReactNode } from "react";

export type Category = {
  label: string;
  value: string | number;
  custom?: ReactNode;
};

export type Excuse = {
  id: number;
  excuse: string;
  category: string;
};

export type Preferences = {
  darkMode: boolean;
  duplicates: boolean;
}