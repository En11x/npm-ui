import { Path } from "./path";

export interface DepInfo {
  name: string;
  version: string;
}

export interface Package {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords: string[];
  date: string;
  links?: {
    npm?: string;
    homepage?: string;
    repository?: string;
    bugs?: string;
  };
  author?: {
    name?: string;
    email?: string;
    username?: string;
    url?:string
  };
  publisher?: {
    username: string;
    email: string;
  };
  maintainers?: {
    username: string;
    email: string;
  }[];
}

export interface NpmPackage {
  package: Package;
  score: {
    final: number;
    detail: {
      quality: number;
      popularity: number;
      maintenance: number;
    };
  };
  searchScore: number;
}

export enum SKIP_EVENT_KEY {
  "UP" = "ArrowUp",
  "DOWN" = "ArrowDown",
  "LEFT" = "ArrowLeft",
  "RIGHT" = "ArrowRight",
  "CTRL" = "Ctrl",
  "TAB" = "Tab",
  "SHIFT" = "Shift",
  "SPACE" = " ",
  "ENTER" = "Enter",
  "ESC" = "Escape",
  "DEL" = "Delete",
}

export interface Header {
  width: number;
  name: string;
  id: Path<Package>;
  link?: Path<Package>;
}
