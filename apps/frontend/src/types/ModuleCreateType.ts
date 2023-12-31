export interface ModuleCreateType {
  title: string;
  description: string;
  files: {
    path: string;
    content: string;
    name: string;
  }[];
}
