import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SearchItem({ url, name, artist, title, duration }) {
    const classes = cx('wrapper', {
        artist,
    });

    const convertMinute = (duration) => {
        var minutes = Math.floor(duration / 60);

        var seconds = duration - minutes * 60;
        return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };
    const nameArray = name.split(',');
    return (
        <div className={classes}>
            <img className={cx('avatar')} src={url} alt="ST" />
            <FontAwesomeIcon icon={faPlay} className={cx('play')} />

            <div className={cx('info')}>
                <h3 className={cx('name-song')}>
                    {title}
                    {duration > 200 && <img src={images.vip} alt="vip" className={cx('vip')} />}
                </h3>

                <div className={cx('name-artist')}>
                    {nameArray.map((namee, index) => (
                        <Link key={index} to={namee} className={cx('name')}>
                            {index ? `, ${namee}` : `${namee}`}
                        </Link>
                    ))}
                </div>
            </div>
            <span className={cx('time-song')}>{convertMinute(duration)}</span>
        </div>
    );
}

export default SearchItem;
