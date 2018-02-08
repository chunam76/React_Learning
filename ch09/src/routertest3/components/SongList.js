import React from 'react'
import Player from './Player';
import { Route, Link } from 'react-router-dom';

// 함수형 기본 템블릿 rsc
const SongList = (props) => {
  let list = props.songs.map((song)=> {
    // CSS 인라인 스타일로 생성하며, 현재 Play되고 있는 item과 다른 item을 동적으로 UI 변경
    let cn = "list-group-item";
    let playBtnStyle = { color:'white' };
    if (props.match.path + "/" + song.id === props.location.pathname) {
      cn += " active";
      playBtnStyle.color='black';
    }
    return (
      <li className={cn} key={song.id}>
        {song.title} ( original musician : {song.musician} )
        <span className="badge">
        {/* Link Component에 to 속성에 Trigger 패턴을 이용하여 링크 주소를 넣어줌 */}
        <Link to={`/songs/${song.id}`}>
          <span className="glyphicon glyphicon-play-circle" style={playBtnStyle}/>
        </Link>
        </span>
      </li>
    )
  })
  return (
    <div>
        <h2>Song List</h2>
        <ul className="list-group">
          {list}
        </ul>
        {/* 자식 Route 지정 : URL에 해당하는 songid 가 있으면 ul 태그 아래에 Player 화면을 보여줘라  */}
        {/* 
          props2는 Route가 주는 속성이고, props는 SongList가 전달해주는 속성
          props2를 Player 에게 전달한다.
         */}
        <Route path={`${props.match.url}/:songid`}
          render={(props2)=> <Player {...props2} songs={props.songs} />} />
    </div>
  )
}
export default SongList;
