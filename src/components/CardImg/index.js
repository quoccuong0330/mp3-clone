import styles from './CardImg.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CardImg({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Link to={data.link}>
                <div className={cx('item')}>
                    <img className={cx('img')} alt="nghe-si" src={data.thumbnail} />
                    <div className={cx('icon-play')}>
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                </div>

                <h1 className={cx('content')}>
                    <span className={cx('title')}>{data.artistsNames}</span>
                </h1>
            </Link>
        </div>
    );
}

export default CardImg;
