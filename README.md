# Management System (BizFlow)

A lightweight business records management UI built with TypeScript and React. This repository currently contains an early scaffold: a records page that renders a paginated records table.

> Status: early work-in-progress. The table rendering and data layer are not yet implemented — components are stubs.

## Tech Stack

- **TypeScript**
- **React** (function components, `.tsx`)

## Project Structure

```
src/
  components/
    RecordsPage.tsx   # Page wrapper that renders the records table
    RecordsTable.tsx  # Table component (pagination via ROWS_PER_PAGE)
  constants/
    index.ts          # Shared constants (e.g. ROWS_PER_PAGE = 10)
```

## Getting Started

This repo does not yet include a build setup (no `package.json`). To run it, drop the components into a React + TypeScript project. For a fresh start with Vite:

```bash
npm create vite@latest management-system -- --template react-ts
cd management-system
npm install
# copy the src/ files from this repo into the new project's src/
npm run dev
```

Then import and render the page:

```tsx
import RecordsPage from './components/RecordsPage';

export default function App() {
  return <RecordsPage />;
}
```

## Configuration

Pagination size is controlled in `src/constants/index.ts`:

```ts
export const ROWS_PER_PAGE = 10;
```

## Screenshot

<!-- TODO: add a screenshot of the records page once the table is implemented -->
![Screenshot placeholder](docs/screenshot.png)

## Roadmap

- [ ] Implement the records data model and table rendering in `RecordsTable.tsx`
- [ ] Wire up pagination controls
- [ ] Add a build setup (`package.json`, `tsconfig.json`, bundler)
- [ ] Add a `.gitignore`

## License

Released under the MIT License. See [LICENSE](LICENSE).