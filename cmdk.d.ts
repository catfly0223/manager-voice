declare module "cmdk" {
  import * as React from "react";

  // Command コンポーネントの型を拡張
  export interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
  }

  export const Command: React.ForwardRefExoticComponent<
    CommandProps & React.RefAttributes<HTMLDivElement>
  >;

  // 他のコンポーネントも必要に応じて拡張
  export const CommandInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>>;
  export const CommandList: React.FC<{ children: React.ReactNode }>;
  export const CommandEmpty: React.FC<{ children: React.ReactNode }>;
} 