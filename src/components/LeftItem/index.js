import classNames from 'classnames/bind';
import styles from './LeftItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function RightItem({ onClick, title, icon, to, img }) {
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
            <img className={cx('img')} src={img} alt={img} />
        </Link>
    );
}

export default RightItem;
