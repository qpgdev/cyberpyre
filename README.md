# What Is Cyberpyre?

<em>cyberpyre</em> is an unofficial supplement for Vampire: the Masquerade - 5th Edition, a tabletop role-playing game 
which is sometimes colloquially referred to by players as <em>V5</em>.  If you are interested in this supplement, I 
would recommend finding a copy of the V5 Corebook, and potentially the V5 Player’s Guide.  While references to 
core mechanics of V5 will be provided, this supplement will largely assume that you have played V5 before, or 
are at least familiar with most of the core mechanics.  If a core concept of V5 is more thoroughly explained in the 
source material, references to the official books will be provided as necessary.

## How Can I Contribute?
<em>cyberpyre</em> is a passion project, and the amount of resources able to be dedicated to it are finite.  If you'd like to contribute, consider donating your talents with:\
&bull; Themed or character artwork;\
&bull; Fun lore or character ideas;\
&bull; Short stories or flavor text;\
Email submissions to qpgdevelopment@gmail.com and make sure to include your name or a tag with the submission - if the contribution is used, I will add your name to the <strong> contributors </strong> page.

## Vite Production Linting

If you are developing a production application, Vite recommends updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
