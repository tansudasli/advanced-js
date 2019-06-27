# core-typescript

- tsconfig.json is must for typescript 
- package.json is must for node (comes w/ `node init`)

## How To Start

inside **core-typescript** folder,
1. `npm init -y`
2. `npm install axios` for fetching JSON data
3. Compile *.ts -> *.js file
  - [ ] right click to tsconfig.json, then click compile, or
  - [ ] `npm install -g typescript`, so you can use `tsc fetch-data.ts` to get *.js files
4. Run *.js file 
  - [ ] right click to fetch-data.js, then click run, or
  - [x] `node fetch-data.js`

or compile & run via ts-code
  - ` npm install -g typescript ts-node`
  - `ts-node fetch-data.ts`
