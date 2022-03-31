# 리액트가 하는일
---

```plaintext
-리액트의 핵심 모듈 2개로 리액트가 하는일 알아보기
```

```html

//1.리액트 컴포넌트 => HTMLElement 연결하기
import ReactDOM from 'react-dom';

//2. 리액트 컴포넌트 만들기
import React from 'react';

```
---
예시)
ReactDOM.render(
    <HelloMessage name = "Taylor" />,

    document.getElementById('hello-example')
);

---
class HelloMessage extends React.Component{
    render(){
        return(
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}


위 예시는 나중에 다시 공부 할것임.

---

# Use React, ReactDOM Library width CDN
---
리액트와 리액트 돔 라이브러리를 가지고 와서 사용해보기.

1.폴더 만들기(react)
2.react 폴더이동
3.npm 프로젝트로 만들기 위해
    npm init -y

4.폴더를 파일서버처럼 운영할수있도록
    npx serve


5.
 react 공식 문서- doc or 문서 - CDN 링크 복사 - vscode에 index.html body내부에 script태그 붙여넣기

***

# 기존 홈페이지
```plaintext

HTML 로 문서 구조를 잡고,
CSS로 스타일을 입히고,
Javascript로 DOM을 조작합니다.


```


# react를 사용했을때와 사용하지 않고 기존 방식을 사용했을때 

기존 방식
```html

<style>
        *{
            margin:0;
            padding: 0;
            border: 0;
        }

        #root p{
            color: white;
            font-size: 20px;
            background-color: green;
            text-align: center;
            width: 200px;
        }

        #btn_plus{
            background-color: red;
            border: 2px solid #000000;
            font-size: 15px;
            width: 200px;
        }
    </style>


    <body>
    <div id="root"></div>
    <button id="btn_plus">+</button>
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script type="text/javascript">
       // console.log(React);
        //console.log(ReactDOM);

        const root = document.querySelector("#root");
        const btn_plus = document.querySelector("#btn_plus");

        let i =0;

        root.innerHTML = "<p>int : 0</p>";


        btn_plus.addEventListener("click", () => {
            root.innerHTML = `<p>init : ${i++}</p>`;
        });



    </script>

</body>
</html>

```


React 를 사용하지 않고 component 를 만들어사용하는 방식
-컴포넌트를 정의하고 실제 DOM에 컴포넌트를 그려준다.

```html
<script>
//component를 만들어서 사용하는 방식 , 컴포넌트를 만들때 초기값 아래와같다.
    const component = {
        message : `init`,
        count : 0,
        render(){
            return `<p>${this.message}${this.count}</p>`
        }
    };
    function render(rootElement, component){
        rootElement.innerHTML = component.render();
    }
    //초기화
    render(document.querySelector('#root'), component);


    document.querySelector("#btn_plus").addEventListener("click",() => {
        component.message = "update";
        component.count = component.count + 1;

        render(document.querySelector('#root'), component);
    });

    </script>
```


리액트를 사용했을때..
```html

//리액트를 사용했을때

//ReactDOM.render(/*리액트 컴포넌트*/, document.querySelector('#root'));

//<p hello="world">    아래의 의미는 나는 p 태그를 쓸것이고 null값에 hello값을 넣을거야 라는의미.
    //null이기 때문에  그냥 <p> </p> 만 있음.
    //<p>`${props.message}:${props.count}` "</p>
------------------------------------------------------------------
```


# 리액트 컴포넌트 만들기

```html
 
const Component = props =>{
    return React.createElement('p',null,`${props.message}:${props.count}`)
}





ReactDOM.render(React.createElement(Component, {message:`init`, count:0},null), 
document.querySelector('#root')
);

document.querySelector("#btn_plus").addEventListener("click",() => {
    ReactDOM.render(
        React.createElement(
            Component, 
            {message:`update`, count:10},
            null
            ), 
            document.querySelector('#root')
        );

        });
    </script>

```
---

# Hook 

### hook 이전
-컴퍼넌트 내부에 상태가 있다면?>
class

-컴퍼넌트 내부에 상태가 없다면
    -라이프 사이클을 사용해야한다면?
    class

    -라이프 사이클에 관계가 없다면?
    function


### hook 이후

-class
-function


Class 컴포넌트 작성법
***

``` html

import React from 'react';

//정의

class ClassComponent extends React.Component{
    render() {
        return <div>Hello</div>;
    }
}


//사용

ReactDOM.render(<ClassComponent />,document.querySelector('#root'));
   
```
Function 컴포넌트 작성법
``` html
import React from 'react';

//정의1
function FunctionComponent(){
    return <div>Hello</div>
}

//정의2
const FunctionComponent = () => <div>Hello</div>;


//사용
ReactDOM.render(<FunctionComponent />, document.querySelector("#root"));
```

# React.createElement

``` html

React.createElement(3개의 인자.)

React.createElement(
    type , //태그 이름 문자열 | 리액트 컴포넌트 | React.Fragment
    [props],  //리액트 컴포넌트에 넣어주는 데이터 객체
    [... children]  // 자식으로 넣어주는 요소들
)

ex)

       console.log(React);
        console.log(ReactDOM);

        //1. 태그 이름 문자열  type

         //<h1>type 이 "태그 이름 문자열" 입니다</h1>   이렇게 들어감.
        ReactDOM.render(
                                    //null은 h1태그 안에 속성을 말함.
            React.createElement('h1',null, `type 이 "태그 이름 문자열" 입니다.`),  //nul이라고 입력하면 h1태그에 어떠한 정보도 넣지 않겠다라는의미.
            document.querySelector('#root')        
            );      
        

        //2. 리액트 컴포넌트 type
//const Component = () => {
//    return React.createElement(
//        'p',
//        null,
//        `type이 "React 컴포넌트" 입니다.`
//        );
//};

//<Component></Component>  => <Component /> => <p>type이 "React 컴포넌트" 입니다.</p>
//함수의 내용을 보여줌.
//ReactDOM.render(
//    React.createElement(Component,null,null),
//    document.querySelector('#root')
//);

```


//3. React.Fragment
ReactDOM.render(
    React.createElement(
        React.Fragment,
    null,
    `type이 "React Fragment" 입니다.`,
    `type이 "React Fragment" 입니다.`,
    `type이 "React Fragment" 입니다.`
    ),
    document.querySelector("#root")
);
     
#root내부에 배열처럼 사용할수가있다.



//4. 복잡한 리액트 Element 모임

``` html

//<div>
//    <div>
//        <h1>주제</h1>
//            <ul>
//                <li>React</li>
//                <li>Vue</li>
//            </ul>
//        </div>
//    </div>
//위와 같은 태그를 순수하게 React로 React.createElement로만 작성한다면??



ReactDOM.render(
    React.createElement(            //하나의 태그로 역할
        "div",
        null,
        React.createElement(
            "div",
            null,
            React.createElement('h1',null,"주제"),
            React.createElement(
                'ul',
                null,
                React.createElement('li',null,"React"),
                React.createElement('li',null,"Vue")
                )
            )
        ),  
    document.querySelector("#root")
);

```
# 4. 복잡한 리액트 Element 모임

``` html 

//<div>
//    <div>
//        <h1>주제</h1>
//            <ul>
//                <li>React</li>
//                <li>Vue</li>
//            </ul>
//        </div>
//    </div>
//위와 같은 태그를 순수하게 React로 React.createElement로만 작성한다면??


ReactDOM.render(
    React.createElement(            //하나의 태그로 역할
        "div",
        null,
        React.createElement(
            "div",
            null,
            React.createElement('h1',null,"주제"),
            React.createElement(
                'ul',
                null,
                React.createElement('li',null,"React"),
                React.createElement('li',null,"Vue")
                )
            )
        ),  
    document.querySelector("#root")
);
```


---
# JSX 가 무엇인가?

//JSX 문법으로ㅓ 작성된 코드는 순수한 Javascript 로 컴파일하여 사용한다.
//누가 해주나요? => babel



//내가 작성한 어떤 코드를 => 순수하게 실행할수있는 자바스크립트
//babel - 새로 나온 문법이나 기능들을 이해해서 그대로 표현해줄수있는 라이브러리
//babel을 사용하면
//<div>Hello</div>  => React.createElement("h1",null,"Hello") 이렇게 자동
//바뀌게 되어 쉽고 편하게 사용할수있다

//babel 사용하려면 
//babel사이트 - setup - usage에 min.js 스크립트 복사하여 main 코드 파일에 추가하고

``` html

//<script type="text/babel"> 로 바꾸어주면됨.

ReactDOM.render(
    <div>     --> 이게 type이고
        <div>   --> 이것부터가 children 영역 이 된다.
            <h1>주제</h1>
            <ul>
              <li>React</li>
              <li>Vue</li>
          </ul>
        </div>
    </div>,
document.querySelector("#root")
);

```

# 왜 JSX를 쓰나요?
//-----가독성 완승.
//-----babel과 같은 컴파일 과정에서 문법적 오류를 인지하기 쉬움.

### JSX 문법
-최상위 요소가 하나여야한다. / 부모 하나.
-최상위 요소 리턴하는 경우, ()로 감싸야한다.
-자식들을 바로 랜더링 하고 싶으면, <>자식들</> 를 사용합니다. => Fragment

``` html
ex)
<>

<div>     --> 이게 type이고
        <div>   --> 이것부터가 children 영역 이 된다.
            <h1>주제</h1>
            <ul>
              <li>React</li>
              <li>Vue</li>
          </ul>
        </div>
    </div>
    <div>     --> 이게 type이고
        <div>   --> 이것부터가 children 영역 이 된다.
            <h1>주제</h1>
            <ul>
              <li>React</li>
              <li>Vue</li>
          </ul>
        </div>
    </div>,

</>   이렇게 하라는 의미이다. 만약 최상위가 두개 이상이라면.
```
-자바스크립트 표현식을 사용하려면, {표현식} 를 이용합니다.

``` html
const title = "주제!!!"

  <div>     --> 이게 type이고
        <div>   --> 이것부터가 children 영역 이 된다.
            <h1>{title}</h1>
            <ul>
              <li>React</li>
              <li>Vue</li>
          </ul>
        </div>
    </div>

-if문은 사용할수없습니다.
    -삼항연산자 혹은 && 를 사용합니다.


-style을 이용해 인라인 스타일링이 가능합니다.
-class대신 className을 사용해 class를 적용할수있습니다.
-자식요소가 있으면 ,꼭 닫아야하고, 자식요소가 없으면 열어서 닫아야 한다.
    -<p>니나노</p>
    -</br>

```

# Props 와 State

Props | State
--|--
컴포넌트 외부에서 컴포넌트에게 주는 데이터 | 컴포넌트 내부에서 변경할수있는 데이터
둘다 변경이 발생하면 랜더가 다시 일어날수있습니다.


# Render함수
Props 와 State 를 바탕으로 컴포넌트를 그립니다.
그리고 Props 와 State 가 변경되면 컴포넌트를 다시 그립니다.
컴포넌트를 그리는 방법을 기술하는 함수가 렌더 함수입니다.


Component                               Component
                 props b , state b
props a                  --->            props b
state a                                  state b      

다시 렌더 됨.

---

props 와 state 사용하는 예

props

``` html
//props는 아래 Component의 {message="안녕하세요"} 이렇게 객체로 들어감.

//function props

function Component(props){
    return (
    <div>
        <h1>{props.message} 이것은 함수로 만든 컴포넌트 입니다.</h1>
    </div>
    );
}



Component.defaultProps = {
    message:"기본값"
}




//클래스 props
class Component extends React.Component{

state = {  //state 초기값 설정하는 방법1
        count : 0
    }



   constructor(props) {  // state 초기값 설정하는 방법2
        super(props);


      
       this.state = {count : 0}
    }




   render(){
        return (
     <div>
       <h1>{this.props.message} 이것은 클래스로 만든 컴포넌트 입니다.</h1>
        <p>{this.state.count}</p>
     </div>
    );
    }


 componentDidMount(){  //render가 끝난 직후에 state를 재정의할것임.
        setTimeout(() =>{
            //
            // this.state.count = this.state.count + 1; 이렇게 하면 안됨.
            
            this.setState({count: this.state.count + 1});  //state 를 변경해주는 함수이름.
        },1000);   //setState 설정하는 방법1
        
        //this.setState((previousState) => {  //setState 설정하는 방법2
        //    const newState = { count: previousState.count + 1 }
         //   return newState;
        //})
    }



    //이 방법은 클래스에서만 사용가능.
 //   static defaultProps = {
 //       message:"기본값2"
 //   }


//}

//message를 기본으로 나오는 멘트를 쓰고 싶다고 할때 
//class에선 두가지방법이있음.
//아래 같은 방법1   , 이 방법은 함수에서도 사용가능.
//Component.defaultProps = {
//    message:"기본값"
//}


//ReactDOM.render(
//    <Component message="안녕하세요!!" />,
//    document.querySelector("#root")
//    );     


ReactDOM.render(
    <Component message="안녕하세요." />,document.querySelector("#root")
  );     


```

state

``` html
state 는 항상 객체 여야한다.

state = {
    count = 0
}
```

# Tip
```
@babel ...jsx 문구가 나와서 에러가 발생되면 

npm install --save-dev @babel/plugin-syntax-jsx 

터미널에 위와 같은 파일을 설치후 재 실행 하고 다시 해보면 잘 나옴.
```


