import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleRight,
    faArrowLeft,
    faArrowRight,
    faBan,
    faCircleInfo,
    faFile,
    faFileWaveform,
    faFontAwesome,
    faGear,
    faMagnifyingGlass,
    faPhone,
    faRectangleAd,
    faShield,
    faShirt,
    faSpinner,
    faUpload,
    faUser,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchItem from '~/components/SearchItem';
import Button from '~/components/Button';

import styles from './Header.module.scss';
import { faAffiliatetheme, faThemeco } from '@fortawesome/free-brands-svg-icons';
import Menu from '~/components/Popper/Menu';

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

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-left')}>
                <Button direction>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Button>

                <Button direction>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Button>

                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Ket qua tim kiem</h4>
                                <SearchItem />
                                <SearchItem />
                                <SearchItem />
                                <SearchItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('wrapper-search')}>
                        <input placeholder="Find song, artist,..." />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
            </div>
            <div className={cx('option')}>
                <Button circle>
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
                <Menu items={MENU_ITEM}>
                    <button className={cx('circle')}>
                        <FontAwesomeIcon icon={faGear} />
                    </button>
                </Menu>
                <Button circle>
                    <FontAwesomeIcon icon={faUser} />
                </Button>
            </div>
        </header>
    );
}

export default Header;
