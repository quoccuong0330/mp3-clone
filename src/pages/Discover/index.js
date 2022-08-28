import styles from './Discover.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <h1>Discover page</h1>
        </div>
    );
}

export default Discover;
