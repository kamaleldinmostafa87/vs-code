export interface IFile {
  id: string;
  name: string;
  isFolder: boolean;
  children?: IFile[];
  active?: boolean | undefined;
  content?: string | undefined;
}
