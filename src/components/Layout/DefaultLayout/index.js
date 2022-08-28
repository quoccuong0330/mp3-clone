import Header from './Header';
import LeftSideBar from './LeftSideBar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import RightSideBar from './RightSideBar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <LeftSideBar />

            <div>
                <Header />
                <div>{children}</div>
            </div>

            <RightSideBar />
        </div>
    );
}

export default DefaultLayout;
