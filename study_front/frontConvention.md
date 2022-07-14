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

5. about us page

   - 팀원 소개
   - 서비스에 대한 설명 소개

   <논의점>

- 게시글 생성이 유저들의 소통만을 위한 게시글인가 ? 아니면 스터디 모집 게시글인가?
  - 만약 소통만을 위한 게시글이면 스터디 CRUD 자체를 웹-> discord 로 뻗어나가게 만들어야 할 거 같음

code convention

- function

  1. 함수 선언문으로 작성합니다
  2. 함수 네이밍은 camelCase 로 작성합니다.
  3. 파라미터가 3개 이상일 경우 특별한 경우가 아닌 이상 객체로 넘겨줍니다.
  4. Class와 생성자에는 PascalCase를 사용합니다.
  5. 상수 및 전역 변수는 모든 글자를 대문자로 사용합니다.
  6. 변수는 es6 에 새로 추가된 const & let 사용을 지향하고 , var 를 지양합니다.
  7. 변수의 선언은 스코프 상단에 합니다.

- typecasting

  1.  암묵적 타입 캐스팅을 지양하기 위해 == 대신 === 혹은 !== 을 사용합니다.

- 주석

  1.  복수행의 코멘트는 /\*_ ... _/ 를 사용해 주십시오. 그 안에는 설명과 모든 매개 변수와 반환 값에 대한 형식과 값을 설명합니다.

      // make() returns a new element
      // based on the passed in tag name
      // @param <String> tag
      // @return <Element> element
      function make(tag) {
      //some code...
      return element;
      }

  2.  문제에 대한 코멘트로 // FIXME :를 사용합니다.
  3.  문제 해결책에 대한 코멘트로 // TODO :를 사용합니다.

- feature flagging

- style
  모든 컴포넌트의 스타일은 styled-components 를 사용합니다.
