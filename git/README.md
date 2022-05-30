# Git
## How to get back to detached head commits
```
git switch -c lost-commits
```
## How to undo a git commit without losing your files?

There are a lot of ways to do so, for example:  
  
### 1. In case you have not pushed the commit publicly yet:  
```
git reset HEAD~1 --soft    
```
That's it, your commit changes will be in your working directory, whereas the LAST commit will be removed from your current branch.  
  
### 2. In case you did push publicly (on a branch called 'master'):  

```
git checkout -b MyCommit //save your commit in a separate branch just in case (so you don't have to dig it from reflog in case you screw up :) )   
```
### 3. revert commit normally and push  

```
git checkout master 
git revert a8172f36 #hash of the commit you want to destroy 
```
### 4. This introduces a new commit (say, it's hash is 86b48ba) which removes changes, introduced in the commit in question (but those changes are still visible in the history) 
```
git push origin master 
```
now if you want to have those changes as you local changes in your working copy ("so that your local copy keeps the changes made in that commit") - just revert the revert commit with --no-commit option:
```
git revert --no-commit 86b48ba (hash of the revert commit). 
```
