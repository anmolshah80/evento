# Evento

- Create reusable `header` and `footer` components
- Create an `events-list` and `event-card` components to render events for a particular search input
- Create a `cn` utitlity function in `lib/utils.ts` to merge conditional tailwind classes using `clsx` and `tailwind-merge` npm packages
- Create a `types.ts` file in `lib` to export reusable `params` typescript types
- Focus on the search input field by typing the `/` (forward slash) key
- Create a custom class i.e., `state-effects` in `globals.css` to apply same animation effects to several different elements
- Create individual event page to view detailed info for the specific event
- Create `skeleton.tsx` and `skeleton-card.tsx` components to render while the page is loading
- Create `db.ts` under `lib` folder to use a single instantiation of PrismaClient throughout the entire app
- Add a `postinstall` lifecycle script to automatically generate `Prisma Client` after installing dependencies
- Change the database provider from `SQLite` to `Postgres`
- Install `zod` to define schema to validate the incoming `page number` data
- Create a `middleware.ts` file in `src` directory to redirect the users to `/events/all` route if the users try to navigate to `/events route`
- Move `getEvent` and `getEvents` util functions to its own file i.e., `server-utils.ts` to indicate that those functions should only be used in server components and not in client components
- Create an `opengraph-image.tsx` file to set Open Graph image for an individual event page (i.e., `event/[slug]` route) which can be used to place the images that appear on social networks and messaging apps when a user shares a link to that event
- Upgrade `prisma` and `prisma client` to `v6.9.0` from the existing `v5.22.0`
- Add the scripts in `package.json` to create the postgres database table and populate seed data in that table
- Add documentation to locally setup the evento project
- Wrap the entire events page in `Suspense` to show the loading skeletons whenever the `page number` changes

## Local Setup

- Clone this [git repository](https://github.com/anmolshah80/evento.git)
- Change directory to `evento` and install the npm packages

  ```bash
  cd evento

  npm install
  ```

- Ensure you have Node.js `v20.17.0` installed

  ```bash
  node -v
  ```

  - If you have [node version manager (nvm)](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) installed, you can install Node.js `v20.17.0` directly

    ```bash
    nvm install 20.17.0

    # to check the installed Node.js versions
    nvm list

    # to switch to use a specified Node.js version
    nvm use 20.17.0

    # if you need help with nvm's other usage options, type
    nvm --help
    ```

- Create an `.env` file in the root directory inside `evento` folder with the following contents. Look for the detailed information on `DATABASE_URL` key contents below in the `PostgreSQL` section under `Notes` sub-heading

  ```properties
  DATABASE_URL="postgresql://<postgres_superuser_name>:<superuser_password>@localhost:<postgres_server_port>/<database_name>?schema=public"
  ```

  _Note: Please ensure you have [PostgreSQL](https://www.postgresql.org/download/) installed in your local machine_

- Create tables for the models defined in `schema.prisma` file under `prisma` folder and populate the seed data in your newly created local postgres database

  ```bash
  npm run db:push-and-seed
  ```

  _Note: Please go through this guide first to [choose between db push and prisma migrate](https://www.prisma.io/docs/orm/prisma-migrate/workflows/prototyping-your-schema#choosing-db-push-or-prisma-migrate)_

  _Note: Refer to `package.json` file for the script above_

- Run your application

  ```bash
  npm run dev
  ```

- (Optional) Open Prisma Studio to view the populated data from your local database

  ```bash
  npx prisma studio
  ```

## Notes

- Downgrade `react` and `react-dom` version to **18.3.1** since npm package `framer-motion@10.16.4` requires `react@"^18.0.0"` as a peer dependency and does not support `react@"19.0.0-rc-66855b96-20241106"`, which is a release candidate for _React 19_

- Resolve issues with tracking files in git
  - `The issue` -> There were files in the local project that weren't being pushed to GitHub (i.e., renamed files changes' were not reflected in remote), even though they were being committed locally and pushed. Basically, there was a discrepancy between the committed files in local and remote.

  - `Don't do this` -> Never do the following since it will just unstage all your files in your current directory

    ```bash
    git rm -r --cached .

    # however, if you have managed to do it then you can undo that using the following command
    # this will reset the state of your working directory and index to match the HEAD commit, discarding any uncommitted changes
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

- Install and Configure Prisma ORM
  - Install `prisma`, `ts-node` and `@prisma/client` npm packages

    ```bash
    npm install prisma@5.22.0 ts-node@10.9.1 --save-dev
    npm install @prisma/client
    ```

  ## `SQLite`
  - Configure prisma with sqlite database

    ```bash
    npx prisma init --datasource-provider sqlite
    ```

  - Create tables after defining your models in `schema.prisma` file

    ```bash
    npx prisma db push
    ```

  ## `PostgreSQL`
  - Configure prisma with default database i.e., postgres. It will create a `schema.prisma` file in the `prisma` folder.

    ```bash
    npx prisma init
    ```

  - Create tables after defining your models in `schema.prisma` file

    ```bash
    npx prisma db push
    ```

  - Edit the `DATABASE_URL` value in `.env` file for postgres

    ```properties
    DATABASE_URL="postgresql://<postgres_superuser_name>:<superuser_password>@localhost:<postgres_server_port>/<database_name>?schema=public"
    ```

    | Key                     | Description                                            |
    | ----------------------- | ------------------------------------------------------ |
    | postgres_superuser_name | Usually it's `postgres` itself                         |
    | superuser_password      | Superuser's password set during installation           |
    | postgres_server_port    | Usually it's `5432` or `5433`                          |
    | database_name           | Your desired database name (for e.g., `evento-db-dev`) |

    _Note: If you have multiple versions of postgres installed in your pc (let's say v14 and v17). To use the specific one, say v17 (the server where you would want to create your database), go to `C:\Program Files\PostgreSQL\17\installation_summary.log` (in Windows) and look for port info within the log._

    _Note: Remove all angular brackets before saving the contents in `.env` file_

  - Execute the seed command defined under the `prisma` key in `package.json`. [Source](https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding#seeding-your-database-with-typescript-or-javascript)

    ```bash
    npx prisma db seed
    ```

  - Open Prisma Studio to view the seeded data from the database

    ```bash
    npx prisma studio
    ```

  - Resources
    - [How to Build a Fullstack App with Next.js, Prisma, and Postgres](https://vercel.com/guides/nextjs-prisma-postgres)
    - [How to use Prisma ORM with Next.js](https://www.prisma.io/docs/guides/nextjs#introduction)

- `5433` is the port for `PostgreSQL v17` meanwhile `5432` is the port for `PostgreSQL v14` (it's my personal local configuration)
  - To confirm the port for `PostgreSQL v14`, read the log from `C:\Program Files\PostgreSQL\14\installation_summary.log`

- Setup Prisma Postgres database in Vercel
  - Create a [Prisma Postgres database in Vercel](https://vercel.com/dashboard/stores)

  - Copy the `.env.local` contents of your newly created prisma postgres database, into your local `.env` file

  - Create the tables in your newly created prisma postgres database, defined in your `schema.prisma` file using the following command (from your local bash terminal)

    ```bash
    npx prisma db push
    ```

  - Once the tables are created, you can seed your data to your remote prisma postgres database via the following command (given that you have a `seed.ts` file in your `prisma/seeders` folder)

    ```bash
    npx prisma db seed
    ```

  - Visit [Prisma Console](https://console.prisma.io/) to view the data seeded into your prisma postgres database

- Comment out `TEvent` type from `lib/types.ts` to just have one source of truth and so is being imported from `@prisma/client` when `npx prisma db push` command was executed in terminal to create the `EventoEvent` table

- To use one-off breakpoint where you need to apply a set width in an element until a specific breakpoint and change the width after that breakpoint (as done in `pagination-controls.tsx` component), follow this [stackoverflow post](https://stackoverflow.com/questions/72651058/tailwind-inline-custom-breakpoint)

- If your GitHub Actions workflow fails with the following error when using Prisma, then it can be resolved by following this [GitHub discussion](https://github.com/prisma/prisma/discussions/12170#discussioncomment-3856535)

  > Error validating datasource db: the URL must start with the protocol postgresql:// or postgres://

- You can reset the database yourself to undo manual changes or `db push` experiments by running. This will reset all data in your database and re-apply migrations.

  ```bash
  npx prisma migrate reset
  ```

  _Note: This will drop all your tables and your existing data_
  - Resources
    - [Prototyping your schema](https://www.prisma.io/docs/orm/prisma-migrate/workflows/prototyping-your-schema)
    - [Development and production](https://www.prisma.io/docs/orm/prisma-migrate/workflows/development-and-production)
    - [Deploying database changes with Prisma Migrate](https://www.prisma.io/docs/orm/prisma-client/deployment/deploy-database-changes-with-prisma-migrate)
    - [Baselining a database](https://www.prisma.io/docs/orm/prisma-migrate/workflows/baselining)

- To initialize a migration history after your database has been reset

  ```bash
  npx prisma migrate dev --name initial-state
  ```

  - Source
    - [Prototyping a new schema](https://www.prisma.io/docs/orm/prisma-migrate/workflows/prototyping-your-schema#prototyping-a-new-schema)

- To ensure that your Prisma schema is in sync with your Database schema

  ```bash
  npx prisma migrate dev
  ```

  - Source
    - [prisma migrate dev](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#migrate-dev)

- To create the migration file and apply the changes (such as adding a new model or changing the existing column name) made to the `schema.prisma` file, to your database

  ```bash
  npx prisma migrate dev --name add_event_booking_model
  ```

- To apply the migration files to your production database and seed the data in your db

  ```bash
  npx prisma migrate deploy

  # (Optional) if your data is deleted while applying the migrations (maybe while renaming the table name)
  npm run db:seed
  ```

  _Note: Don't forget to change the `DATABASE_URL` environment variable's value to your remote database url_

- To validate [optional text inputs](https://github.com/colinhacks/zod/issues/310#issuecomment-794533682) using `zod`

  ```tsx
  // get-tickets-modal.tsx

  const FormSchema = z.object({
    // ...other validations
    phone: z
      .string()
      .regex(PHONE_NUMBER_REGEX)
      .max(17)
      .optional()
      .or(z.literal('')),
  });
  ```

- [Server Actions in Next.js](https://nextjs.org/learn/dashboard-app/mutating-data)

## To-dos

- Configure husky to lint and format your files before committing
- [Define your Prisma Schema](https://www.prisma.io/docs/guides/clerk-nextjs#32-define-your-prisma-schema)

## Resources

- [Bookings UI](https://dribbble.com/shots/21370684-Bookings-list-view)
