#### 배포 링크

https://jiye-7.github.io/codestates-fe-advanced-course/

<br/>

#### 실행화면 gif

https://user-images.githubusercontent.com/62678492/183045674-ef3ed73d-fb52-44ac-9d46-a03e25153c0d.mov

<br/>

#### 프로젝트 실행 방법

```
npm install
npm start
```

<br/>

#### 사용 스택 목록

> react, typescript, redux, styled-components

<br/>

#### 프로젝트 설명

> - 게시물 리스트와 상세 게시물 페이지를 확인할 수 있는 게시판 형태의 웹 서비스
> - JSON Placeholder의 무료 목업 API 데이터 사용

<br/>

### 구현한 기능 목록(Software Requirement Specification)

#### 기본 구현 사항

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

#### 추가 구현 사항

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

#### 구현 방법 / 구현하면서 어려웠던 점

<details>
<summary>구현 방법</summary>
&nbsp; 1. /posts 요청으로 가져온 100개의 포스트 데이터를 redux store에 저장하여, state를 관리하였고, 전체 리스트를 가져오도록 구현하였습니다. <br/>
&nbsp; 2. 상세페이지로 이동할 때 처음에는 redux에서 선택한 게시글의 id를 비교하여 같은 것을 찾아서 렌더하였는데,
서버로 /posts/id 요청을 날려서 해당 응답 값을 가지고 상세페이지를 구현하도록 변경하였습니다. <br/>
&nbsp; 3. /comments?postId={id} 요청을 사용하여 해당 포스트에 대한 댓글을 가져와서 보여주었습니다. <br/>
</details>
<details>
<summary>구현하면서 어려웠던 점</summary>
&nbsp; 1. 상세페이지에서 게시글과 댓글 가져온 것을 redux에 저장해 놓고, useEffect cleanup 함수를 작성하지 않아서 다시 상세페이지로 들어갔을 때 화면에 기존 내용에서 새롭게 보여줘야 할 데이터로 내용이 바뀌는 것을 확인하였습니다. <br/>
&nbsp;&nbsp; 1-1. 위 문제를 해결하기 위해 기존 글을 지우는 액션 객체를 만들어서 리덕스의 상태를 변경하여 문제를 해결하였습니다. <br/>
&nbsp; 2. 처음 요구사항을 제대로 파악하지 못해 상세페이지를 라우터를 이용하여 처리하였다가 모달창으로 변경해야하는 줄 알고 구현사항을 변경하였습니다. <br/>
&nbsp;&nbsp; 2-1. 요구사항이 정확히 어떤 것인지 정리를 통해, 처음 구현했던 사항이 맞았다는 것을 알고 다시 코드를 구현하였습니다. <br/>
&nbsp; 3. 폴더/파일 등의 구조를 잡을 때 어떤 것이 좋을지 생각하면서 코드를 작성하였지만, 불필요한 폴더 구조가 많아서 정리하였습니다. <br/>
&nbsp;&nbsp; 3-1. 같은 로직에 해당하는 파일들을 폴더별로 분리하였고, redux관련 폴더로 따로 분리하였습니다.  <br/>

</details>

<br/>

#### 추가 구현사항에 대한 구현 방법 / 설명

<details>
<summary>구현 방법</summary>
&nbsp; 1. 페이지네이션 기능을 구현할 때 한 페이지에 보여줘야 할 포스트 개수와 페이지 버튼이 몇개 필요할지에 대한 고민을 하였습니다. <br/>
&nbsp; 2. 전체 게시글 / 한 페이지에 보여줄 포스트 개수를 Math.ceil로 계산하여 총 페이지 갯수를 구했습니다. <br/>
&nbsp; 3. 선택한 페이지에 해당하는 포스트 글을 해당 포스트 가져오는 요청과 댓글 가져오는 요청을 통해 데이터를 가져와 화면에 보여주었습니다. <br/>
&nbsp; 4. 상세페이지에서 댓글에 대한 정보는 댓글 보기 토글을 이용하여 클릭이 일어났을 때 댓글 요청을 가져오도록 처리하였습니다. <br/>
</details>
<details>
<summary>구현하면서 어려웠던 점</summary>
&nbsp; 1. 코드를 작성할 때 조금 더 효율적이고 더 많은 데이터에 대한 요청, 데이터를 핸들링 할 때 어떻게 하면 좋을지 생각하는 것이 어려웠습니다. <br/>
&nbsp; 2. 효율적인 코드, 재사용성과 가독성이 좋은 코드를 작성하는 것이 매우 중요하다고 생각했습니다. <br/>
</details>

<br/>

#### 성능 최적화에 대해서 고민하고 개선한 방법

<details>
<summary>고민한 점</summary>
&nbsp; 1. 상세글 페이지로 갈 때 리덕스에 전체 저장한 글 목록이 있는데 1개의 글 요청을 따로 날릴 필요가 있을까? 생각했지만 <br/>
&nbsp;&nbsp; 리덕스에서 1개의 데이터를 찾기 위해 데이터를 순회하는 것이 좋지 않다는 것을 처음에 생각하지 못했습니다. <br/> 
&nbsp;&nbsp; 더 많은 데이터에 대한 요청이 들어올 때를 생각하고, 접근하는 자세가 바뀌어야 한다는 것을 느낄 수 있었습니다.
</details>
<details>
<summary>느낀점, 개선 방법</summary>
&nbsp; 1. 단 1개의 데이터를 찾는 것이라도, 더 효율적인 것이 무엇인지 깊게 생각하고 코드를 작성해야겠다 느꼈습니다. <br/>
&nbsp;&nbsp; 위에서 만난 고민은 서버에 요청을 보내 그 결과를 받아 처리하는 방법으로 개선하였습니다.
</details>

<br/>

#### WireFrame

<details>
<summary>figma 사용</summary>
<p>post list 화면</p>

![image](https://user-images.githubusercontent.com/62678492/183029856-1d134ffb-9d9c-4a6e-8ae2-d76183263619.png)

<p>post detail 화면</p>

![image](https://user-images.githubusercontent.com/62678492/183029888-da8d13c9-7e2b-4b08-aed2-2010bba249dc.png)

</details>
