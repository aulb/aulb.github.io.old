---
layout: post
title:  "⚡️ Useful Beginner Git Commands"
date:   2017-08-04
categories: git
---
# Useful Beginner git Commands
These were the git commands that I find useful during my development time. The most important git trick I learned is to not be scared and start a new clean branch whenever it gets too complicated. Cherry-picking commits from the failed branch is always an option, provided that we commit frequently and cleanly.

### Dry running a commit to check of what it'll do.
The `—dry-run` flag exist and its a good thing to use when I wasn't sure of what the commands would do.

### Amending to previous commit
Instead of doing `git rebase -i <branch>` then `fixup` do `git commit —amend —no-edit`

### Check latest commit statuses and files
Useful to get the hash too. \\
`git log —stat` \\
`git log —oneline`

### Making new branch from specific branch
When I first started, I used to forget to checkout from a specific branch and would always build on top of what I was working on previously. It was messy :( \\
`git checkout -b <new_name> <optional: which_branch>`

### Renaming local git branch
`git branch -m <new_name>`

### Deleting remote branch and push a new local branch
`git push origin <old_name> <new_name>`

### Remove local branch
`git branch -d <local_branch_name>`

### Remove remote branch
`git push origin —d <remote_branch_name>`

### Renaming local files
Instead of renaming the file directly, its better to use the command below to help git notice that a renaming operation has been performed.
`git mv <old_filename> <new_filename>`

### Github specific feature!
Though this isn't a git command, it was one of the feature I found useful from the most popular git service. One of my pull request was heavy in terms of whitespace linting, diluting the meat of why the request was made in the first place. Fortunately github build a whole slew of features to help with pull requests, one of which was directly relevant to my case. Add `?w=1` when viewing the diffs. More here over at <a href="https://github.com/blog/967-github-secrets">github secrets</a>.

<!-- Renaming files/folders with git
https://blog.filippo.io/git-fixup-amending-an-older-commit/
http://fle.github.io/git-tip-keep-your-branch-clean-with-fixup-and-autosquash.html -->

<!-- <script src="https://gist.github.com/aulb/9beeef67ae03fb574f39fa37a40a1928.js"></script> -->
