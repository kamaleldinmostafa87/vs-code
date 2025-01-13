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
      content: "",
    },
    {
      id: uuid(),
      name: "component.ts",
      isFolder: false,
      content: "",
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
          content: "html file ",
        },
        {
          id: uuid(),
          name: "index.css",
          isFolder: false,
          content: "css file",
        },
        {
          id: uuid(),
          name: "index.tos",
          isFolder: false,
          content: "tos file",
        },
      ],
    },
  ],
};
