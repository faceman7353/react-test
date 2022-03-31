// 클래스 props
class Component extends React.Component{

    state = {
        count : 0
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
        this.setState({
            count: this.state.count + 1
        },1000);
    })
}

    // 이 방법은 클래스에서만 사용가능.
   static defaultProps = {
       message:"기본값2"
   }


}

// message를 기본으로 나오는 멘트를 쓰고 싶다고 할때 
// class에선 두가지방법이있음.
// 아래 같은 방법1   , 이 방법은 함수에서도 사용가능.
Component.defaultProps = {
   message:"기본값"
}


ReactDOM.render(
   <Component message="안녕하세요!!" />,
   document.querySelector("#root")
   );     


ReactDOM.render(
    <Component message="안녕하세요." />,document.querySelector("#root")
  );    