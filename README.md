# Evento

- Create reusable `header` and `footer` components
- Create an `events-list` and `event-card` components to render events for a particular search input
- Create a `cn` utitlity function in `lib/utils.ts` to merge conditional tailwind classes using `clsx` and `tailwind-merge` npm packages
- Create a `types.ts` file in `lib` to export reusable `params` typescript types
- Focus on the search input field by typing the `/` (forward slash) key
- Create a custom class i.e., `state-effects` in `globals.css` to apply same animation effects to several different elements
- Create individual event page to view detailed info for the specific event
- Create `skeleton.tsx` and `skeleton-card.tsx` components to render while the page is loading

## Notes

- Downgrade `react` and `react-dom` version to **18.3.1** since npm package `framer-motion@10.16.4` requires `react@"^18.0.0"` as a peer dependency and does not support `react@"19.0.0-rc-66855b96-20241106"`, which is a release candidate for _React 19_

- Resolve issues with tracking files in git

  - `The issue` -> There were files in the local project that weren't being pushed to GitHub (i.e., renamed files changes' were not reflected in remote), even though they were being committed locally and pushed. Basically, there was a discrepancy between the committed files in local and remote.

  - `Don't do this` -> Never do the following since it will just unstage all your files in your current directory

    ```bash
    git rm -r --cached .

    # however, if you have managed to do it then you can undo that using the following command
    # it will reset the state of your working directory and index to match the HEAD commit, discarding any uncommitted changes
    # Source -> https://graphite.dev/guides/how-to-use-git-reset-hard-head#how-to-use-the-git-reset---hard-head-command
    git reset --hard HEAD
    ```

  - `Do this` -> Remove each cached file (where you see the tracking issue) from Git index using the command
    ```bash
    git rm --cached src/components/Header.tsx
    git rm --cached src/components/H1.tsx
    git rm --cached src/components/Logo.tsx
    ```
  - Rename those files manually in kebab case format (previously it was in pascal case)

## To-dos

- Add documentation for using `useScroll` and `useTransform` hooks from `framer-motion` in `event-card.tsx` component to animate the events scrolling in that page
