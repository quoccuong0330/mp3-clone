import styles from './Discover.module.scss';
import classNames from 'classnames/bind';
import SlideBanner from './components/SlideBanner';
import NewSong from './components/NewSong';

const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <SlideBanner />
            <NewSong />
        </div>
    );
}

export default Discover;
