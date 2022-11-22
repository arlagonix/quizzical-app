export interface TypeOption {
  id: number;
  value: null | string;
  text: string;
}

export const typesList: TypeOption[] = [
  {
    id: 1,
    value: null,
    text: "Any",
  },
  {
    id: 2,
    value: "multiple",
    text: "Multiple Choice",
  },
  {
    id: 3,
    value: "boolean",
    text: "True / False",
  },
];
