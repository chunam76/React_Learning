import { Component } from 'react';
import { renderRoutes } from 'react-router-config'
import { routes } from '../routes'

class Main extends Component {
    render() {
        {/* routes 객체를 가져와서 Router로 화면에 출력 */}
        return renderRoutes(routes)
    }
}

export default Main;