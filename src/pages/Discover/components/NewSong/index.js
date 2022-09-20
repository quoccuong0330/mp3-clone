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

    useEffect(() => {
        fetch(`https://apizingmp3.herokuapp.com/api/home?page=1`)
            .then((res) => res.json())
            .then((res) => {
                const array = res.data.items[3].items[0].song;
                setMusics(array.slice(0, 12));
                setTitle(res.data.items[3].title);
            });
    }, []);

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

            <h1 className={cx('title')}>Nhac si yeu thich</h1>
            <div className={cx('item')}>
                <CardImg />
                <CardImg />
                <CardImg />
                <CardImg />
                <CardImg />
            </div>
        </div>
    );
}

export default NewSong;
