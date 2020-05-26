# js-bootcamp-2020

## To start

- Fork repo.
- Run `npm i`.

## How to

### How to update forked repository

Create link to original repository and name it `upstream`:

`git remote add upstream https://github.com/Curious-Javascript/js-bootcamp-2020.git`

Fetch updates without updating local files:

`git fetch upstream`

Merge `master` branch with current local branch:

`git merge upstream/master`

Push changes to your repository:

`git push origin master`

### How to create Pull Request

1. Fork repo by clicking button 'Fork' in the top right corner.

2. Clone your forked repository to your local machine with command:

`git clone https://github.com/your-username/js-bootcamp-2020.git`

3. Create new branch for each lesson with command:

`git branch origin/lesson-XX`

4. Add your new (or changed) files to git index with command:

`git add -A`

- or exact names of files if you do not want to commit all changes:

`git add README.md`

5. Commit changes with command:

`git commit`

Add commit message by pressing key `A`. The press `Esc`, write `:wq` and press `Enter`.

6. Push your changes to remote branch:

`git push origin/lesson-XX`

7. Go to https://github.com/zahar-g/js-bootcamp-2020/compare. Choose new branch from your forked repository and press 'Create Pull Request' button.
Don't forget to add title and description in PR regarding your changes.

## Useful information

### Books

[Eloquent Javascript](https://eloquent-javascript.karmazzin.ru/)

[Learn Javascript](https://learn.javascript.ru/)

### Courses

[Javascript Course](https://ru.code-basics.com/languages/javascript)

[Programming Basics](https://ru.hexlet.io/courses/programming-basics)

[Intro to Git](https://ru.hexlet.io/courses/intro_to_git)

### Video courses

[Javascript 2.0](https://www.youtube.com/watch?v=2phqy5-Fz1k&list=PLM7wFzahDYnEltE-aVGhRHYPwIJn0Xquu)
