##### 배포 링크

<br/>

##### 실행화면 gif

<br/>

##### 프로젝트 실행 방법

```
npm install
npm start
```

<br/>

##### 사용한 스택 목록

> react, typescript, styled-components

<br/>

##### 프로젝트 설명

> - 게시물 리스트와 상세 게시물 페이지를 확인할 수 있는 게시판 형태의 웹 서비스
> - JSON Placeholder의 무료 목업 API 데이터 사용

<br/>

#### 구현한 기능 목록(Software Requirement Specification)

##### 기본 구현 사항

<details>
<summary>게시물 리스트</summary>
  &nbsp; 1. 게시물 리스트는 게시판 형태로 구성 <br/>
  &nbsp; 2. 100개의 포스트 데이터 렌더링
</details>
<details>
<summary>게시물 상세 페이지</summary>
&nbsp; 1. 각 게시물 상세 페이지에는 댓글 수가 표기, 게시물 내용의 하단에 댓글이 나열 <br/>
&nbsp; 2. 한 포스트 당 5개의 코멘트 데이터 렌더링
</details>

##### 추가 구현 사항

<details>
<summary>페이지네이션 구현</summary>
&nbsp; 1. 전체 포스트 갯수로 총 보여줘야 할 페이지 계산하여 버튼 컴포넌트 구현 <br/>
&nbsp; 2. 기존 100개의 데이터를 렌더링했던 것에서 데이터를 10개씩 보여지도록 구현 <br/>
&nbsp;&nbsp; 2-1. 해당 페이지에 대한 데이터 10개를 slice를 이용하여 페이지네이션 구현 <br/>
</details>
<details>
<summary>토글 구현</summary>
&nbsp; 1. 상세 페이지에서 댓글을 토글 형태로 변경 <br/>
</details>
<br/>

##### 구현 방법 / 구현하면서 어려웠던 점

<details>
<summary>구현 방법</summary>
- getPosts
</details>
<details>
<summary>구현하면서 어려웠던 점</summary>
- getPosts
</details>

##### Wireframe
