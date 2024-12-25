import { IFile } from "../interfaces/fileTree";

export const fileStructure: IFile = {
  name: "node_modules",
  isFolder: true,
  children: [
    {
      name: "index.tsx",
      isFolder: false,
    },
    {
      name: "component.ts",
      isFolder: false,
    },
    {
      name: "pages",
      isFolder: true,
      children: [
        {
          name: "index.html",
          isFolder: false,
        },
        {
          name: "index.css",
          isFolder: false,
        },
        {
          name: "index.tos",
          isFolder: false,
        },
      ],
    },
  ],
};
