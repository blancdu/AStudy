현재 파일구조는 완벽하지 않은 상태이며, 언제든 변경될 수 있습니다.

1. main page
   1-1. github social login / logout : modal
   1-2. board CRUD
   1-3. searching problem with BOJ : SEO?

2. my page
   2-1. delete user info
   2-2. update user info
   2-3. my groups : 내가 속한 스터디 그룹들 모음

3. study page
   3-1. 문제풀이 비교
   3-2. 코드 리뷰

   - default -> 리뷰 요청자의 gitbuh url , img , content 를 간단하게 보여준다
   - develop -> github codereview 시스템과 동일하게 만들고 연동한다.

4. community page
   - board CRUD
   - commnets CRUD

<논의점>

- 게시글 생성이 유저들의 소통만을 위한 게시글인가 ? 아니면 스터디 모집 게시글인가?
  - 만약 소통만을 위한 게시글이면 스터디 CRUD 자체를 웹-> discord 로 뻗어나가게 만들어야 할 거 같음
