import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from '~/components/Popper/Menu/MenuItem';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function Button({
    disable,
    to,
    href,
    onClick,
    children,
    buy,
    hasIcon,
    circle,
    direction,
    leftIcon,
    rightIcon,
    contents,
    items = [],
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        buy,
        circle,
        direction,
        disable,
        hasIcon,
    });

    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item}></MenuItem>;
        });
    };

    return (
        <Tippy
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            <Comp className={classes} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                {children}
                {rightIcon && <span className={cx('right-icon')}>{rightIcon}</span>}
            </Comp>
        </Tippy>
    );
}

export default Button;
