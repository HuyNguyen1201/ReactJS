import { Component } from "react";
import {withStyles} from '@material-ui/core/styles'
class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>Trang chủ</li>
                    <li>Khóa học</li>
                    <li>Tin tức</li>
                    <li>Liên hệ</li>
                </ul>
            </nav>
        )
    }
}
export default Navigation;