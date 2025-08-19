// Read note in README on why this type is commented out

// export type TEvent = {
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

// react final form's field `meta` props
/* eslint-disable @typescript-eslint/no-explicit-any */
export type FieldMetaProps = {
  active?: boolean;
  data?: Record<string, any>;
  dirty?: boolean;
  dirtySinceLastSubmit?: boolean;
  error?: any;
  initial?: any;
  invalid?: boolean;
  length?: number;
  modified?: boolean;
  modifiedSinceLastSubmit?: boolean;
  pristine?: boolean;
  submitError?: any;
  submitFailed?: boolean;
  submitSucceeded?: boolean;
  submitting?: boolean;
  touched?: boolean;
  valid?: boolean;
  validating?: boolean;
  visited?: boolean;
};

/* eslint-enable @typescript-eslint/no-explicit-any */
