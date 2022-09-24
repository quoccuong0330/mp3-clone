import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const items = [
    {
        icon: <FontAwesomeIcon icon={faHeart} />,
        title: 'Them vao thu vien',
    },
    {
        icon: <FontAwesomeIcon icon={faHeart} />,
        title: 'Them vao thu vien',
    },
    {
        icon: <FontAwesomeIcon icon={faHeart} />,
        title: 'Them vao thu vien',
    },
];

// function Card({ url, name, artist, title, duration }) {
function Card({ data, search, playlist }) {
    const convertMinute = (duration) => {
        var minutes = Math.floor(duration / 60);

        var seconds = duration - minutes * 60;
        return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };
    const namesArray = data.artists;

    const classes = cx('wrapper', { search, playlist });

    const [show, setShow] = useState(false);

    const handleHide = () => {
        setShow(false);
    };

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
                <Tippy
                    interactive
                    visible={show}
                    placement="bottom-start"
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                {items.map((item, index) => (
                                    <li key={index}>
                                        <span>{item.icon}</span>
                                        <span>{item.title}</span>
                                    </li>
                                ))}
                            </PopperWrapper>
                        </div>
                    )}
                    onClickOutside={handleHide}
                >
                    <span className={cx('option')} onClick={() => setShow(true)}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </span>
                </Tippy>
            )}
        </div>
    );
}

export default Card;
