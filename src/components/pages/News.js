import React from 'react';

const News = () => {
    return (
        <div className="body-site">
           
            
            <div className="news mt-4 pb-10">
                <div className="container">
                    <p className="text-center fw-bold fs-40 text-blue_1">Новости</p>
                    <div className="row row-cols-xl-3 row-cols-md-2 mb-5">
                        <div className="news-card">
                            <div className="news-card_img">
                                <img src="images/news.png" alt="" />
                            </div>
                            <p className="news-card_title">
                                6 Strategies to Find Your Conference Keynote and Other Speakers
                            </p>
                            <p className="news-card_text">
                                Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti
                                beberapa langkah mudah.
                            </p>
                            <p className="news-card_time">12 Март - 16:00</p>
                        </div>
                        <div className="news-card">
                            <div className="news-card_img">
                                <img src="images/news.png" alt="" />
                            </div>
                            <p className="news-card_title">
                                6 Strategies to Find Your Conference Keynote and Other Speakers
                            </p>
                            <p className="news-card_text">
                                Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti
                                beberapa langkah mudah.
                            </p>
                            <p className="news-card_time">12 Март - 16:00</p>
                        </div>
                        <div className="news-card">
                            <div className="news-card_img">
                                <img src="images/news.png" alt="" />
                            </div>
                            <p className="news-card_title">
                                6 Strategies to Find Your Conference Keynote and Other Speakers
                            </p>
                            <p className="news-card_text">
                                Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti
                                beberapa langkah mudah.
                            </p>
                            <p className="news-card_time">12 Март - 16:00</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn border-blue rounded-pill text-blue px-5 py-3 fw-bold fs-18">Больше</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default News;