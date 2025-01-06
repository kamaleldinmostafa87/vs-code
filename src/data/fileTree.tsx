import { IFile } from "../interfaces/fileTree";
import { v4 as uuid } from "uuid";

export const fileStructure: IFile = {
  id: uuid(),
  name: "node_modules",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "index.tsx",
      isFolder: false,
    },
    {
      id: uuid(),
      name: "component.ts",
      isFolder: false,
    },
    {
      id: uuid(),
      name: "pages",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.html",
          isFolder: false,
        },
        {
          id: uuid(),
          name: "index.css",
          isFolder: false,
        },
        {
          id: uuid(),
          name: "index.tos",
          isFolder: false,
        },
      ],
    },
  ],
};
