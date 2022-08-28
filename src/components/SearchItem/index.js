import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/7/e/6/0/7e6088a95d78a12eae1cf55d0b3cc3b9.jpg"
                alt="ST"
            />
            <FontAwesomeIcon icon={faPlay} className={cx('play')} />

            <div className={cx('info')}>
                <h3 className={cx('name-song')}>
                    Chay ngay di
                    <img src={images.vip} alt="vip" className={cx('vip')} />
                </h3>
                <a href="/" className={cx('name')}>
                    Son Tung MTP
                </a>
            </div>
            <span className={cx('time-song')}>04:06</span>
        </div>
    );
}

export default SearchItem;
