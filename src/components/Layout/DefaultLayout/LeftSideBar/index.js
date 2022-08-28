import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './LeftSideBar.module.scss';
import images from '~/assets/images';
import TagDescription from '~/components/TagDescription';
import Button from '~/components/Button';
import LeftItem from '~/components/LeftItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faCompactDisc, faRadio, faStar, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Link to="/">
                    <img src={images.logo} alt="Zing" />
                </Link>
            </div>

            <nav>
                <LeftItem to="/profile" icon={<FontAwesomeIcon icon={faUser} />} title="Cá Nhân" />
                <LeftItem to="/" icon={<FontAwesomeIcon icon={faCompactDisc} />} title="Khám Phá" />
                <LeftItem to="/chart" icon={<FontAwesomeIcon icon={faChartSimple} />} title="#zingchart" />
                <LeftItem to="/radio" icon={<FontAwesomeIcon icon={faRadio} />} title="Radio" />
                <LeftItem to="/following" icon={<FontAwesomeIcon icon={faStar} />} title="Theo Dõi" />
            </nav>

            <TagDescription title="Đăng nhập để khám phá playlist dành riêng cho bạn">
                <Button to="/login">Đăng Nhập</Button>
            </TagDescription>

            <TagDescription buy title="Nghe nhạc không quảng cáo cùng kho nhạc VIP">
                <Button
                    href="https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=sidebar"
                    target="_blank"
                    buy
                >
                    Nâng cấp VIP
                </Button>
            </TagDescription>
        </div>
    );
}

export default SideBar;
