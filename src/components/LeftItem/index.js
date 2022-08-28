import classNames from 'classnames/bind';
import styles from './LeftItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function RightItem({ onClick, title, icon, to, active }) {
    const props = {
        to,
        onClick,
    };

    const path = window.location.pathname;
    const toLink = to;

    const classes = cx('left-item', {
        active: path === toLink,
    });

    return (
        <Link {...props} className={classes}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </Link>
    );
}

export default RightItem;
