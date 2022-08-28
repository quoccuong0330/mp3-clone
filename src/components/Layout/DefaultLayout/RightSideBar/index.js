import styles from './RightSideBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function RightSideBar() {
    return (
        <div className={cx('wrapper')}>
            <h2>RightSideBar</h2>
        </div>
    );
}

export default RightSideBar;
