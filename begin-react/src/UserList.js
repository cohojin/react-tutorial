import React ,{ useEffect } from 'react'; 

const User = React.memo(function User({ user , onRemove , onToggle}){
  useEffect(() => {
    // props -> state 
    // REST API 
    // D3 Video.js 
    // setInterval , setTimeout
    console.log('컴포넌트가 화면에 나타남');
    
    return () => {
      // clearInterval , clearTimeout 
      // 라이브러리 인스턴스 제거 
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []); 

  return (
    <div>
      <b 
      style={{
        color : user.active ? 'green' : 'black',
        cursor : 'pointer'
      }}
      onClick={ ()=> onToggle(user.id)}
      >
      {user.username}
      </b> <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}> 삭제</button>
    </div>
  ); 
});

function UserList( {users , onRemove , onToggle} ){
  return(
    <div>
      {
        users.map(
          ( user , index ) => (
          <User 
          user={user} 
          key={user.id} 
          onRemove={onRemove}
          onToggle={onToggle}
          />
          )
        )
      }
    </div>
  );
}

export default React.memo(UserList); 
