import styles from './ProfileSearch.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ProfileSearch() {
    return (
        <div className={cx('wrapper')}>
            <h1>ProfileSearch page</h1>
        </div>
    );
}

export default ProfileSearch;
