<!-- < class 101 > Reference : https://jobs.class101.net/1dc83442-c2d4-4162-94ae-4d04717f1ae0 -->
<!-- < Grownbetter > Reference : https://www.notion.so/jaram/Frontend-style-guide-WIP-3cdf754915804bb1b8429cf8eba10972 -->

현재 파일구조는 완벽하지 않은 상태이며, 언제든 변경될 수 있습니다.
컨벤션은 언제든 변경될 수 있습니다.

code convention

- Variable

  1. 변수는 기본적으로 camelCase 로 작성합니다.
  2. Boolean 타입의 변수는 is, has, can 과 같은 접두사를 붙입니다.
  3. 변수는 스코프 최상단에 선언합니다.
  4. 상수 및 전역 변수는 모든 글자를 UpperCase 를 사용합니다.
  5. 변수 선언 방식은 ES6 이후 추가된 const & let 을 지향합니다.

- Function

  1. 함수 선언문으로 작성합니다
  2. 함수의 이름은 동사로 시작합니다.
  3. 함수의 이름은 기본적으로 camelCase 로 작성합니다.
  4. 페이지 이동 메서드(함수) 이름은 다음과 같이 정의합니다.
     - history.push ⇒ moveTo<...>Page (ex. moveToLecturePage)
     - history.replace ⇒ replaceWith<...>Page (ex. replaceWithLecturePage)
  5. 파라미터가 3개 이상일 경우 특별한 경우가 아닌 이상 객체로 넘겨줍니다.
  6. Class와 생성자에는 PascalCase를 사용합니다.

- React/JSX Style Guide

  1.  Event Handler

      - Component Prop로 넘기는 이벤트 핸들러에는 on 접두사를 붙입니다.
        // BAD 👎
        <SignUpForm handleFormSubmit={~~} />
        // GOOD 👍
        <SignUpForm onFormSubmit={~~} />

      - 이벤트 핸들러 이름은 Noun first 로 네이밍합니다.
        // BAD 👎
        const handleClickButton = useCallback(() => { ... })
        <SignUpForm onSubmitForm={~~} />

        // GOOD 👍
        const handleButtonClick = useCallback(() => { ... })
        <SignUpForm onFormSubmit={~~} />

  2.  File Naming
      - React Component를 정의한 파일은 PascalCase 로 적습니다.
      - React Component를 포함하고 있지 않다면 .ts로 파일을 정의합니다.

- TypeCasting

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
