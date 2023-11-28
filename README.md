# Fevertokens Tech Test


## Installation

Make sure you have [pnpm](https://pnpm.io/) installed. You can install it globally using:

```bash
npm install -g pnpm
```

Then, install project dependencies:

```bash
pnpm install
```

## Building the Project

To build the project in port=8000, run:

```bash
pnpm run build
```

## Running the Project

To run the project, use:

```bash
pnpm start
```

## Configuration

Copy the `.env.example` file and rename it to `.env`. Update the values in the `.env` file according to your configuration.

```bash
cp .env.example .env
```


## Project Structure

```plaintext
.
├── src/                  # Source code
│   ├── index.js          # Entry point
│   └── ...
├── test/                 # Test files
├── .env.example          # Example environment variables file
├── .gitignore            # Git ignore file
├── package.json          # Project metadata and dependencies
├── pnpm-lock.yaml        # pnpm lock file
└── README.md             # Project documentation
```
