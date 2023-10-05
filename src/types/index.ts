
export interface ProjectItem {
  id: string
  preview: string
  previewSize: [number, number] | undefined
  repoName: string
  repoLink: string
  shortDesc: string
  mappedComponent: string
}
export interface ProjectListType {projects: ProjectItem[]}

export interface Note {
  id: string
  date: string
  title: string
  tags: Array<string>
  mappedComponent: string
}
export type Notes = {items: Note[]}