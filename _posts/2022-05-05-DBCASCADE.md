---
title:  "데이터 삭제 시 foreign key 에러"
excerpt: "데이터 삭제 시 테이블 관계 설정으로 인해 삭제가 안되는 현상"

categories:
  - Project
tags:
  - [DB, DB 삭제, 테이블 관계 설정, CASCADE, DB 데이터 삭제]

toc: true
toc_sticky: true
 
date: 2022-05-21
last_modified_at: 2022-05-21
---

#### DB 삭제시 오류
```
ERROR 1217 (23000): Cannot delete or update a parent row: a foreign key constraint fails
```

관계가 설정되어 다른 테이블의 컬럼이 외래키로 들어오면 삭제가 되지 않는다. 하지만 데이터베이스 설계 시 게시글을 삭제하면 게시글에 달린 댓글까지 삭제되야 하는 경우가 생길 수 있다. 이때 CASCADE 옵션을 사용한다.

models 파일에서 설정 해주면 된다. 관계 설정에서 `onDelete: 'CASCADE'` 넣어주기
```javascript
static associate(models) {
  models.parties.belongsTo(models.users, {
    foreignKey: 'leader',
    targetKey: 'id',
    onDelete: 'CASCADE',
  })
}
```