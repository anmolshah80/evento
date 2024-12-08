# Evento

- Create reusable `Header` and `Footer` components
- Create an `EventsList` and `EventCard` components to render events for a particular search input
- Create a `cn` utitlity function in `lib/utils.ts` to merge conditional tailwind classes using `clsx` and `tailwind-merge` npm packages
- Create a `types.ts` file in `lib` to export reusable `params` typescript types
- Focus on the search input field by typing the `/` (forward slash) key

## Notes

- Downgrade `react` and `react-dom` version to **18.3.1** since npm package `framer-motion@10.16.4` requires `react@"^18.0.0"` as a peer dependency and does not support `react@"19.0.0-rc-66855b96-20241106"`, which is a release candidate for _React 19_
