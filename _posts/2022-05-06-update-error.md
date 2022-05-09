---
title: "sequelize update 에러"
excerpt: "sequelize update시 수정은 되지만 500에러가 뜨는 현상"

categories:
  - Error Handling
tags:
  - [Blog, jekyll, Github, Git, TIL, Javascript, sequelize, sequelize update, sequelize 실행 오류]

toc: true
toc_sticky: true
 
date: 2022-05-06
last_modified_at: 2022-05-06
---
#### 오류 내용
```javascript
const updateUser = await user.update(
    { nickname, password, image, phone_number },
    { where: { id: user.id }}
  )
  return res.stauts(200).json({ updateUser, message: 'succes update user info' })
```
sequelize로 유저 정보를 수정하면 500에러가 뜨지만 데이터베이스 상에서는 수정이 됨.

#### 해결방법
return에서 `res.status`를 `res.stauts`로 오타를 냈더니 데이터베이스 상에서 수정만 되고 500 에러로 넘어가버렸다.
:exclamation: 수정은 되지만 에러가 생길때 오타 확인

**오타 수정하니 문제 해결**
