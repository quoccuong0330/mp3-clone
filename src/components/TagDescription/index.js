import styles from './TagDescription.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function TagDescription({ children, buy, title }) {
    const classes = cx('wrapper', {
        buy,
    });

    return (
        <div className={classes}>
            <span className={cx('description')}>{title}</span>
            {children}
        </div>
    );
}

export default TagDescription;
