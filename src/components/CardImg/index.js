import styles from './CardImg.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardImg() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/">
                <div className={cx('item')}>
                    <img
                        className={cx('img')}
                        alt="nghe-si"
                        src="https://photo-resize-zmp3.zmdcdn.me/w480_r2x3_jpeg/cover_artist/3/e/c/5/3ec5ae34f4ad4fcaab567c678d44ce86.jpg"
                    />
                </div>
            </Link>
        </div>
    );
}

export default CardImg;
