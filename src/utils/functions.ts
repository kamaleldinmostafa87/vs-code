import { IFile } from "../interfaces/fileTree";

export const doesOjectExists = (arr: IFile[], id: string) => {
  return arr.some((obj) => obj?.id === id);
};
