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

//리액트 컴포넌트 만들기
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

```

