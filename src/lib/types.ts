// Read note in README on why this type is commented out

// export type TEventoEvent = {
//   id: number;
//   name: string;
//   slug: string;
//   city: string;
//   location: string;
//   date: Date;
//   organizerName: string;
//   imageUrl: string;
//   description: string;
// };

// Source -> https://stackoverflow.com/questions/59623524/typescript-how-to-map-type-keys-to-camelcase
// Create a custom type to check whether the string passed as a parameter is in camelCase or not
// TODO: (for text-form-field.tsx component)
// type CamelCase<S extends string> =
//   S extends `${infer P1}_${infer P2}${infer P3}`
//     ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
//     : Lowercase<S>;
