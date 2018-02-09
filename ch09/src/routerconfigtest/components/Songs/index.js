import { Component } from 'react';
import { renderRoutes } from 'react-router-config'

class Songs extends Component {
    render() {
        {/* props 에서 route를 가져옴 */}
        const {route} = this.props;
        {/* route.routes 객체를 가져와서 Router로 화면에 출력 */}
        {/* Router 를 자동으로 Switch 컴포넌트로 감싸준다. */}
        return renderRoutes(route.routes);
    }
}

export default Songs;