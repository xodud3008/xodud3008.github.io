---
title:  "First Project Git Workflow"
excerpt: "첫번째 프로젝트. 백엔드 개발자. 깃 워크플로우. 프로젝트에서 깃 사용법. "

categories:
  - FirstProject
tags:
  - [Blog, jekyll, Github, Git, TIL, Javascript, codestates, firstproject, 첫번째 프로젝트, 코드스테이츠, 백엔드, 프론트엔드, git, git workflow, 깃허브, 깃 워크플로우, 깃 명령어, git merge, git pull, git remote]

toc: true
toc_sticky: true
 
date: 2022-04-08
last_modified_at: 2022-04-08
---

#### 깃허브 워크플로우

##### 팀 프로젝트를 위한 깃허브 워크플로우

1. `$ git clone 'UpStream의 저장소 주소(깃 클론할때 주소)'`  
  팀장) upstream의 저장소를 포크하지 않고 local로 clone 한다.

2. `$ git checkout -b '개발용 branch(e.g. Dev)'`  
  팀장) 개발 용으로 사용할 Dev brach를 만든다.

3. `$ git push origin Dev`  
  팀장) upstream으로 해당 branch를 올려준다.

4. `$ git clone 'Dev branch 주소'`  
  팀원) Dev branch를 fork한 뒤 자신의 local로 clone한다.

5. `$ git remote add UpStream 'UpStream 주소'`  
  팀원) 클론한 프로젝트에 upstream 연결

6. `$ git checkout -b 'Dev'`  
  모두) Dev branch를 만든다.

7. `$ git push origin Dev`  
  모두) local에 만들어진 Dev branch를 origin에 push해준다.

8. `$ git checkout -b 'feature'`  
  모두) Dev branch에서 하위 branch를 만든다(작업용 branch). 기능마다 새로운 branch를 만들어 작업한다.

9. `$ git push origin feature`  
  모두) 작업이 끝나면 feature branch에서 local 코드를 push한다. 그럼 origin의 feature branch로 코드가 업데이트된다. github로 가서 upstream에 pull request를 보낸다. 
**깃허브 페이지에서 할 경우 `feature -> Dev(UpStream)`로 pull request를 보내야 한다. `feature -> main` pull request 금지**

10. `$ git pull UpStream Dev`  
  모두) pull request가 생기면 팀원들이 모여 리뷰를 진행. 
  팀장) 문제가 없으면 최종 merge 진행. 
  모두) 이후 upstream의 Dev branch를 pull 해서 프로젝트를 최신 상태로 업데이트 한다.

11. `$git push origin Dev`  
  최신화된 local의 Dev branch를 origin으로 push하여 백업. 7~10번을 반복하며 작업을 계속한다.