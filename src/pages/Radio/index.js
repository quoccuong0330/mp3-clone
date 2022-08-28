import styles from './Radio.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Radio() {
    return (
        <div className={cx('wrapper')}>
            <h1>Radio page</h1>
        </div>
    );
}

export default Radio;
