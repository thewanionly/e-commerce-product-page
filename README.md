# E-Commerce Product Page App

This project is a solution to Frontend Mentor's challenge with the same name.
Built with React as the frontend library/framework.
Other tools used for building the app are the ff:

- yarn (package manager)
- webpack (bundler)
- babel (transpiler/compiler)

## Steps and Notes in building this project

1. Build a React app from scratch
   Source: https://javascript.plainenglish.io/create-a-react-app-from-scratch-in-2021-8e9948602e9c

   - Create a directory and cd to it.
   - Initialize the app with `yarn init -y`
   - Install the dependencies found in the link above.
     The dependencies include babel, webpack, react and reac-dom
   - Create `src` and `public` directory
   - In `public`, create `index.html` and add starter HTML codes inside.
   - In `src`, create `index.js` and add started React code inside
   - Configure webpack by creating `webpack.config.js`. Add config found in the link above.
   - Configure babel by creating `.babelrc`. Add config found in the link above.
   - Add scripts to `package.json`. See link above for the code.
   - (Optional) Add jsconfig.json to configure baseUrl and etc.
   - Finally, to test if everythin works, run `npm run start`
   - PS: Be cautious about the quotation marks used in the codes in the link above. It may cause your app not to work.

2. Create a git repository.
   Here are the commands use to start a local git repository
   - In the root of your project folder, run `git init`
   - Create a `.gitignore` file.
   - Run `git add .` to stage changes
   - Run `git commit -m "First commit"` to commit to local repository
   - In GitHib (or any git remote repo hosting platform), create a new repo.
   - In your cmd, run the ff: `git remote add origin <remote repo link>`
   - Run `git branch -M main`
   - Push all the changes to remote repo by running `git push -u origin main`
