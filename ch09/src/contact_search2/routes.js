import SearchContainer from './components/Search';
import AddContactContainer from './components/AddContact';

// 정적 Route 정보 작성
// SearchContainer, AddContactContainer 추가
const routes = [
    { 
        path:'/', 
        component: SearchContainer,
        routes: [
			{
				path: '/add',
				component: AddContactContainer
			}
        ]
    }
]

export default routes;