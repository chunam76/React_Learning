import Home from './components/Home';
import About from './components/About';
import Songs from './components/Songs/index';
import SongList from './components/Songs/SongList';
import SongDetail from './components/Songs/SongDetail';
import NotFound from './components/NotFound';

const songs = [
    { id:1, title:"Fallin' for you", musician:'Colbie callet', youtube_link:'PABUl_EX_hw' },
    { id:2, title:"Can't hurry love", musician:'The supremes', youtube_link:'EJDPhjQft04' },
    { id:3, title:"Landslide", musician:'Dixie chicks', youtube_link:'V2N7gYom9-A' },
    { id:4, title:"Can't let go", musician:'Linda ronstadt', youtube_link:'P-EpGKXmoe4' },
    { id:5, title:"Doctor my eyes", musician:'Jackson Browne', youtube_link:'7JlFKS_1oZk' },
    { id:6, title:"We gotta get you a woman", musician:'Todd Rundgren', youtube_link:'EyUjbBViAGE' },
    { id:7, title:"Hip to my heart", musician:'Band Perry', youtube_link:'vpLCFnD9LFo' },
    { id:8, title:"Rolling in the deep", musician:'Adele', youtube_link:'EvK8pDK6IQU' }
];

// 정적 Component 구성 : 속성 전달은 어떻게? Redux와 같이 사용
const routes = [
	{ path: '/', exact: true, component: Home },
    { path: '/about', component: About	},
    // Songs Router 정보
	{ 
        path: '/songs', 
        component: Songs, 
        // path가 '/songs'와 일치하면 /components/Songs/index 화면 표시
        // Songs/index는 renderRoutes(route.routes) 로 Songs Router의 하위 Router 정보들을 추가
        routes : [
			{ path: '/songs', exact: true, component: SongList },
            { path: '/songs/:id', component:SongDetail }
        ]
    },
    // 매칭되는 정보가 없을 경우 NotFound 를 보여준다 => Switch 컴포넌트로 감싼다.
    { path: '*', component: NotFound }
]

// songs 객체와 routes 객체 export
export { songs, routes };