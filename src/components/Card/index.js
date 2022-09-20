import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

// function Card({ url, name, artist, title, duration }) {
function Card({ data, search, playlist }) {
    const convertMinute = (duration) => {
        var minutes = Math.floor(duration / 60);

        var seconds = duration - minutes * 60;
        return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };
    const namesArray = data.artists;

    const classes = cx('wrapper', { search, playlist });

    return (
        <div className={classes}>
            <img className={cx('avatar')} src={data.thumbnail} alt="ST" />
            <FontAwesomeIcon icon={faPlay} className={cx('play')} />

            <div className={cx('info')}>
                <h3 className={cx('name-song')}>
                    {data.title}
                    {data.duration > 240 && <img src={images.vip} alt="vip" className={cx('vip')} />}
                </h3>

                <div className={cx('name-artist')}>
                    {namesArray.map((names, index) => (
                        <Link key={index} to={names.link} className={cx('name')}>
                            {index ? `, ${names.name}` : `${names.name}`}
                        </Link>
                    ))}
                </div>
            </div>
            {search ? (
                <span className={cx('time-song')}>{convertMinute(data.duration)}</span>
            ) : (
                <span className={cx('option')}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </span>
            )}
        </div>
    );
}

export default Card;
