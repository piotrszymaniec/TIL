# Git & github
## Contents
### 1. Authorizing 🔑push access to repos on gh
### 2. Creating gh repo from command line
### 3. Geting back to detached head commits
### 4. How to undo a git commit without losing 😢 your files?
### 5. How to fix 🛠 .gitignore so it does exclude selected folder 📁
### 6. Changing commit message in history
### 7. How to write great README.md files 📑
---
### 1. Authorizing push access to repos on gh
[problem with need to retype ssh everytime](https://9to5answer.com/starting-ssh-agent-on-windows-10-fails-quot-unable-to-start-ssh-agent-service-error-1058-quot)
1. generate ssh key - preferably name it id_rsa so next command choose it by default  
```
ssh-keygen -t ed25519 -C "your@github.email"
```
2. start ssh agent  
```
start-ssh-agent and enter passphrase if you added it in previous step
```
3. add generated key for example id_rsa, when in c:/users/username directory  
```
ssh-add ./ssh/id_rsa
```
if problems arise, start powershell with admin rights and if ssh-agent is stopped  
Check the current status of ssh-agent:

```Get-Service | ?{$_.Name -like '*ssh-agent*'} | select -Property Name, StartType, Status```

Enable the Service if it is disabled:  
  
```Set-Service -Name ssh-agent -StartupType Manual```
   
Start the Service:  
  
```Start-Service ssh-agent```
  
Add your key as before:  
```ssh-add <path to the key>```  

4. add key to github  
```
gh ssh-key add id_rsa.pub
```
and ...  
if you are in repo that you want to push to github  
```
git push -u origin master
```
---
### 2. Creating gh repo from command line
- prereq: [gh client](https://cli.github.com)  
- additional infor [gh docs](https://cli.github.com/manual/gh_repo_create)  

1. generate auth token on your github profile page
2. run ```gh auth login```
3. follow the steps
4. if you want connect with ssh and you dont have it yet (cancel gh step process and resume it after these steps)
  - (on windows) run ```ssh-keygen -t ed25519 -C "your@email.adress"```
  - choose filename ex. user
  - it will create 2 files user and user.pub copy both of them to .ssh/ directiory in your user directory
5. authenticate your github on this computer via webpage or access token
6. choose authentication method - use auth token from step 1. or authenticate via webpage login
7. preliminary steps complete. Now cutting to the chase:

from direcotry with some repo it creates ghub repo with same name and sets **remote** to ghub
```
gh repo create
```
or
```
gh repo create new-repo-on-ghub-with-different-name-than-current-directory
```
---

## 3. How to get back to detached head commits
```
git switch -c lost-commits
```
---
## 4. How to undo a git commit without losing your files?

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
---
## 5. How to fix .gitignore so it does exclude selected folder
Sometimes git does not exclude files/folders added `.gitignore` especially if you had commited them before. Here is how to fix it. I am ignoring [node_modules](https://user-images.githubusercontent.com/17564080/51767305-ef21a700-20aa-11e9-98b2-01d7a76b403c.png) from Angular project as an example

1. Update `.gitignore` with the folder/file name you want to ignore. You can use anyone of the formats mentioned below (prefer format1)
```
### Format1  ###
node_modules/
node/

### Format2  ###
**/frontend/node_modules/**
**/frontend/node/**

```
2. Commit all the changes to git. Exclude the folder/files you don't want commit, in my case `node_modules`
3. Execute the following command to clear the cache
```
git rm -r --cached .
```
4. Execute `git status` command and it should output `node_modules` and sub directories marked for deletion
5. Now execute 
```
git add .
git commit -m "fixed untracked files" 
```
---
**Update**: Windows users make sure your `.gitignore` uses UTF-8 rather than UTF-16. See [comment](https://gist.github.com/pavankjadda/2bb6fbdd8786e1f57fd7bcbcc666b51d?permalink_comment_id=3860456#gistcomment-3860456) for details  
credit https://gist.github.com/pavankjadda/2bb6fbdd8786e1f57fd7bcbcc666b51d
---
## 6. Changing commit message in history
1. go to commit before this which you want to edit
2. create a branch
3. make rebase -i and point  to rebase _ to _
4. start (i've used fork program)
---
### 7. How to write great README.md files 📑
- todo get gist out of articles below
 - articles https://tom.preston-werner.com/2010/08/23/readme-driven-development.html
 - https://github.com/othneildrew/Best-README-Template
 - example readme https://github.com/date-fns/date-fns/blob/main/README.md
 - presentation about "magical readme" https://www.youtube.com/watch?v=SSjuUhkeqoo
