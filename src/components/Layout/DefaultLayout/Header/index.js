import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleRight,
    faArrowLeft,
    faArrowRight,
    faBan,
    faCircleInfo,
    faCoins,
    faFile,
    faFileWaveform,
    faFontAwesome,
    faGear,
    faPhone,
    faRectangleAd,
    faRightFromBracket,
    faShield,
    faShirt,
    faUpload,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Search from '~/components/Layout/component/Search';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { faAffiliatetheme, faThemeco } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        leftIcon: <FontAwesomeIcon icon={faBan} />,
        title: 'Danh sách chặn',
        to: '/mymusic/blocked',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faFileWaveform} />,
        rightIcon: <FontAwesomeIcon icon={faAngleRight} />,
        title: 'Chất lượng nhạc',
    },
    {
        rightIcon: <FontAwesomeIcon icon={faAngleRight} />,
        leftIcon: <FontAwesomeIcon icon={faAffiliatetheme} />,
        title: 'Giao diện',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faCircleInfo} />,
        title: 'Giới thiệu',
        mode: 'disable',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faFontAwesome} />,
        title: 'Góp ý',
        mode: 'disable',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faPhone} />,
        title: 'Liên hệ',
        mode: 'disable',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faRectangleAd} />,
        title: 'Quảng cáo',
        mode: 'disable',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faFile} />,
        title: 'Thỏa thuận sử dụng',
        mode: 'disable',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faShield} />,
        title: 'Chính sách bảo mật',
        mode: 'disable',
    },
];

const USER_ITEM = [
    {
        leftIcon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Nâng cấp VIP',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Mua VIP',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Đăng xuất',
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-left')}>
                <Button direction disable>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Button>

                <Button direction disable>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Button>

                <Search />
            </div>
            <div className={cx('option')}>
                <Button circle contents="Theme">
                    <FontAwesomeIcon icon={faShirt} />
                </Button>
                <Button
                    circle
                    href="https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=sidebar"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faThemeco} />
                </Button>

                <Button circle>
                    <FontAwesomeIcon icon={faUpload} />
                </Button>

                <Button items={MENU_ITEM} circle>
                    <FontAwesomeIcon icon={faGear} />
                </Button>
                <Button items={USER_ITEM} circle>
                    <FontAwesomeIcon icon={faUser} />
                </Button>
            </div>
        </header>
    );
}

export default Header;
