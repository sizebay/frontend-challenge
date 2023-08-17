# Sizebay Frontend Challenge

SizeFashion will be presenting a highlight of products from its collections at a major national event. You have been tasked with displaying these collections in a web app, to ensure convenient access for the customer success team, who will be handling the presentation. Due to the urgency of the delivery and taking into account your technical level, the composition of the UI will also be your responsibility.

## Basic commands and installation

1. Clone this repository on your machine with the following command

```bash
git clone https://github.com/samuelrms/frontend-challenge.git
```

2. Navigate to the project root folder

```bash
cd frontend-challenge
```

3. Run the command to install the project dependencies

```bash
yarn
```

4. Run the following command to start the development server

```bash
yarn dev
```

5. Run the command to run the application tests

```bash
yarn test
```

6. Run the command to run the application tests watch

```bash
yarn test:watch
```

7. Enter the command to perform the code indentation checks

```bash
yarn style:check
```

8. Run the following command to perform the correction of the identifier and code pattern

```bash
yarn style:fix
```

9. Run husky install command to install git hooks

```bash
yarn prepare
```

## Stack used

**Front-end:**
- Next, Redux, 
- TailwindCSS, 
- Typescript, 
- NextUI, 
- Husky, 
- Jest, 
- Commitlint
- Eslint
- Prettier
- React Testing Library
- EditorConfig
- Node-fetch
- React-icons
- Axios
- Cross-fetch
- identity-obj-proxy
- swc

## Feedback

If you have any feedback, please let us know at samuelaoliveiraramos@gmail.com or https://samuelramos.dev/contato.

## Folder architecture

	.
	├── public/
	│   └── [...static files]
	├── src/
	│   ├── app/
	│   │   ├── clothes/
	│   │   │   ├── [slug]
	│   │   │   │   └── page.tsx
	│   │   │   └── page.tsx
	│   │   ├── favorites/
	│   │   │   ├── [slug]
	│   │   │   │   └── page.tsx
	│   │   │   └── page.tsx
	│   │   ├── globals.css
	│   │   ├── layout.tsx
	│   │   ├── page.tsx
	│   │   └── Providers.tsx
	│   ├── components/
	│   │   ├── ButtonStyle/
	│   │   │   ├── Button.test.tsx
	│   │   │   └── index.tsx
	│   │   ├── Footer/
	│   │   │   ├── Footer.test.tsx
	│   │   │   └── index.tsx
	│   │   ├── HomeAccordion/
	│   │   │   ├── HomeAccordion.test.tsx
	│   │   │   └── index.tsx
	│   │   ├── Loading/
	│   │   │   ├── Loading.test.tsx
	│   │   │   └── index.tsx
	│   │   ├── Nav/
	│   │   │   ├── Nav.types.tsx
	│   │   │   └── index.tsx
	│   ├── functions/
	│   │   ├── addToFavorites.ts
	│   │   ├── getCategory.ts
	│   │   ├── getData.ts
	│   │   ├── localStorage.ts
	│   │   ├── normalizeImage.ts
	│   │   ├── parseUrl.ts
	│   │   ├── stringifyUrl.ts
	│   │   └── __test__/
	│   │       └── functions.test.ts
	│   ├── mocks/
	│   │   └── index.ts
	│   ├── store/
	│   │   ├── favoriteStore.ts
	│   │   └── globalStore.ts
	│   └── types/
	│       ├── children.ts
	│       ├── itemClothes.ts
	│       └── parseURL.ts
	└── [...config files]
