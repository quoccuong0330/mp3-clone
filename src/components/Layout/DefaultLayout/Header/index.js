import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SearchItem from '~/components/SearchItem';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

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
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
            </div>
        </header>
    );
}

export default Header;
