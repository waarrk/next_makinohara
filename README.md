# Makinohara

Next.js13 を使った Nested Layout 実験用リポジトリです

[`yarn create next-app --experimental-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)で作成されています

## 依存関係のインストール

```bash
yarn install
```

## ローカルサーバー起動

```bash
yarn dev
```

## テスト

```bash
yarn test
```

## Linting

```bash
# Linting warnings and errors
yarn lint

# Linting warnings and errors with auto fix
yarn lint:fix
```

## ESLint

core-web-vitals と prettier との干渉防止

.eslintrc.json

```json
{
  "extends": ["next/core-web-vitals", "prettier"]
}
```

## Formatting

```bash
yarn format
```

## Prettier

.prettierrc

```json
{
  "trailingComma": "all", // 末尾カンマ必須
  "tabWidth": 2, // タブ幅2
  "semi": false, // セミコロンなし
  "singleQuote": true, // シングルクォート許可
  "jsxSingleQuote": true // JSX内シングルクォート許可
}
```
