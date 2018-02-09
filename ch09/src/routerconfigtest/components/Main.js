import { Component } from 'react';
import { renderRoutes } from 'react-router-config'
import { routes } from '../routes'

class Main extends Component {
    render() {
        {/* routes 객체를 가져와서 Router로 화면에 출력 */}
        {/* Router 를 자동으로 Switch 컴포넌트로 감싸준다. */}
        return renderRoutes(routes)
    }
}

export default Main;