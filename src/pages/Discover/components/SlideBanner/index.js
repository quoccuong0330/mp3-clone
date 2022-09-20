import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from './SlideBanner.module.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'none', background: 'red' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, display: 'none', background: 'green' }} onClick={onClick} />;
}

const cx = classNames.bind(styles);
function SlideBanner() {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        fetch(`https://apizingmp3.herokuapp.com/api/home?page=1`)
            .then((res) => res.json())
            .then((res) => {
                setBanner(res.data.items[0].items);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>
                {banner.map((img) => (
                    <div className={cx('block')} key={img.encodeId}>
                        <Link to={img.link}>
                            <img className={cx('banner')} src={img.banner} alt="img" />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SlideBanner;
