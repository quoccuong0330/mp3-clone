/* eslint-disable no-unused-vars */
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Card from '~/components/Card';
import CardImg from '~/components/CardImg';
import styles from './NewSong.module.scss';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function NewSong() {
    const [musics, setMusics] = useState([]);
    const [title, setTitle] = useState([]);
    const [titleCard, setTitleCard] = useState([]);
    const [cardImg, setCardImg] = useState([]);

    useEffect(() => {
        fetch(`https://apizingmp3.herokuapp.com/api/home?page=1`)
            .then((res) => res.json())
            .then((res) => {
                const array = res.data.items[3].items[0].song;
                setMusics(array.slice(0, 12));
                setTitle(res.data.items[0].title);
            });
    }, []);

    useEffect(() => {
        fetch(`https://apizingmp3.herokuapp.com/api/home?page=2`)
            .then((res) => res.json())
            .then((res) => {
                const array = res.data.items[0].items;
                setCardImg(array.slice(0, 5));
                setTitleCard(res.data.items[0].title);
            });
    }, []);

    console.log(cardImg);

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>{title}</h1>
            {/* <div className={cx('button')}>
                <Button primary>Bai hat</Button>
                <Button primary primarymode>
                    Albums
                </Button>
            </div> */}
            <Row md={3}>
                {musics.map((music) => (
                    <Col key={music.encodeId}>
                        <Card data={music} playlist />
                    </Col>
                ))}
            </Row>

            <h1 className={cx('title')}>{titleCard}</h1>
            
            <div className={cx('item')}>
                {cardImg.map((card) => (
                    <CardImg key={card.encodeId} data={card} />
                ))}
            </div>
        </div>
    );
}

export default NewSong;
