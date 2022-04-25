import React from 'react'
import Item from '../../images/podcast/item.png'
import Banner from '../../images/banner.png'
import Avatar from '../../images/detail-video/avatar.png'
export default function DetailVideo() {
    return (
        <div className='detail-video'>
            <div className='main-video'>
                <iframe src="https://www.youtube.com/embed/y2u_-QomGXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='video-describe container'>
                <div className=' video-describe__content'>
                    <div className='content content-col'>
                        <div className='wrap-title'>
                            <h2 className='video-describe__title'>
                                Taekwondo có lợi ích gì?ó lợi ích gì?ó lợi ích gì?ó lợi ích gì?ó lợi ích gì?ó lợi ích gì?ó lợi ích gì?
                            </h2>
                            <div className='card__content'>
                                <div className='card__content--author card__describe'>
                                    <div className='views'>
                                        14.6k views
                                    </div>
                                    <div className='date'>
                                        28 thg 9, 2020
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' action'>
                    <ul className='action__list'>
                        <li className='like '>
                            <div className='icon circle-icon'>
                                <svg id="thumb_up_black_24dp" xmlns="http://www.w3.org/2000/svg" width="15.168" height="15.168" viewBox="0 0 15.168 15.168">
                                    <path id="Path_6073" data-name="Path 6073" d="M0,0H15.168V15.168H0ZM0,0H15.168V15.168H0Z" fill="none" />
                                    <path id="Path_6074" data-name="Path 6074" d="M6.056,13.64h5.688a1.255,1.255,0,0,0,1.163-.771l1.909-4.456a1.249,1.249,0,0,0,.088-.461V6.688A1.268,1.268,0,0,0,13.64,5.424H9.652l.6-2.888.019-.2a.951.951,0,0,0-.278-.67L9.323,1,5.158,5.165a1.256,1.256,0,0,0-.367.891v6.32A1.268,1.268,0,0,0,6.056,13.64Zm0-7.584L8.8,3.313,7.952,6.688H13.64V7.952l-1.9,4.424H6.056ZM1,6.056H3.528V13.64H1Z" transform="translate(-0.368 -0.368)" fill="#2b2b2b" />
                                </svg>
                            </div>
                            <span className='amount'>14.6k</span>
                        </li>
                        <li className='dislike'>
                            <div className='icon circle-icon'>
                                <svg id="thumb_down_black_24dp" xmlns="http://www.w3.org/2000/svg" width="13.168" height="13.168" viewBox="0 0 13.168 13.168">
                                    <path id="Path_6075" data-name="Path 6075" d="M0,0H13.168V13.168H0ZM0,0H13.168V13.168H0Z" fill="none" />
                                    <path id="Path_6076" data-name="Path 6076" d="M8.681,3H3.743a1.09,1.09,0,0,0-1.01.669L1.077,7.537a1.084,1.084,0,0,0-.077.4v1.1a1.1,1.1,0,0,0,1.1,1.1H5.559L5.038,12.64l-.016.176a.826.826,0,0,0,.241.582l.582.576L9.46,10.357a1.09,1.09,0,0,0,.318-.774V4.1A1.1,1.1,0,0,0,8.681,3Zm0,6.584L6.3,11.965l.735-2.93H2.1v-1.1L3.743,4.1H8.681ZM10.876,3H13.07V9.584H10.876Z" transform="translate(-0.451 -1.354)" />
                                </svg>
                            </div>
                            <span className='amount'>12</span>
                        </li>
                        <li className='comment'>
                            <div className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17.36" height="17.351" viewBox="0 0 17.36 17.351">
                                    <g id="Group_4787" data-name="Group 4787" transform="translate(0.259 0.25)">
                                        <path id="Path_6072" data-name="Path 6072" d="M8.425,0A8.435,8.435,0,0,0,0,8.425a8.325,8.325,0,0,0,1.314,4.516L.038,16.128a.526.526,0,0,0,.685.685l3.187-1.276a8.325,8.325,0,0,0,4.516,1.314A8.425,8.425,0,0,0,8.425,0Zm0,15.8A7.268,7.268,0,0,1,4.27,14.512a.521.521,0,0,0-.3-.094.527.527,0,0,0-.2.038l-2.3.923.923-2.3a.528.528,0,0,0-.056-.495A7.268,7.268,0,0,1,1.053,8.425,7.372,7.372,0,1,1,8.425,15.8Z" fill="#a7a7a7" stroke="#a7a7a7" stroke-width="0.5" />
                                    </g>
                                </svg>

                            </div>
                            <span className='amount'>12</span>
                        </li>
                        <li className='share'>
                            <div className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15">
                                    <path id="Path_6078" data-name="Path 6078" d="M10,9V5L3,12l7,7V14.9c5,0,8.5,1.6,11,5.1C20,15,17,10,10,9Z" transform="translate(-3 -5)" fill="#a7a7a7" />
                                </svg>
                            </div>
                            <span>Share</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='gray-line container'></div>
            <div className='detail-video__content container'>
                <div className='large-col detail-comment'>
                    <div className='hero-comment'>
                        <div className='hero-comment__top'>
                            <div className='info'>
                                <div className='avatar'>
                                    <img src={Avatar} alt="" />
                                </div>
                                <div className='info__account'>
                                    <div className='info__account--name'>
                                        Anh Tuan
                                    </div>
                                    <div className='info__account--sub'>
                                        27 subcribes
                                    </div>
                                </div>
                            </div>
                            <div className='sub-btn'>
                                SUBCRIBES
                            </div>
                        </div>
                        <div className='hero-comment__content'>
                            <p>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
                            </p>
                            <p>
                                It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                            </p>
                            <div className='show-more'>
                                Xem thêm
                                <svg viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='section__title'>
                        <a href='#' target='_blank'>
                            <h1 className='bd-bottom'>
                                Bình luận
                            </h1>
                            <span className='amount'> 18</span>
                        </a>
                    </div>
                    <div className='card-comment'>
                        <div className='avatar'>
                            <img src={Avatar} alt="" />
                        </div>
                        <div className='card-comment__content'>
                            <div className='name'>
                                Anh Tuan
                                <span className='time'>
                                    2 ngay truoc
                                </span>
                            </div>
                            <div className='comment-content'>
                                I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a
                                thousand unknown plants are noticed by me
                            </div>
                            <div className='reply-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.358" height="13.351" viewBox="0 0 13.358 13.351">
                                    <g id="Group_4787" data-name="Group 4787" transform="translate(0.258 0.25)">
                                        <path id="Path_6072" data-name="Path 6072" d="M6.425,0A6.433,6.433,0,0,0,0,6.425,6.349,6.349,0,0,0,1,9.869L.029,12.3a.4.4,0,0,0,.522.522l2.43-.973a6.349,6.349,0,0,0,3.444,1A6.425,6.425,0,0,0,6.425,0Zm0,12.047a5.543,5.543,0,0,1-3.169-.981A.4.4,0,0,0,3.028,11a.4.4,0,0,0-.149.029l-1.756.7.7-1.756a.4.4,0,0,0-.043-.377A5.543,5.543,0,0,1,.8,6.425a5.622,5.622,0,1,1,5.622,5.622Z" fill="#a7a7a7" stroke="#a7a7a7" stroke-width="0.5" />
                                    </g>
                                </svg>
                                Trả lời
                            </div>
                        </div>
                    </div>
                    <div className='card-comment'>
                        <div className='avatar'>
                            <img src={Avatar} alt="" />
                        </div>
                        <div className='card-comment__content'>
                            <div className='name'>
                                Anh Tuan
                                <span className='time'>
                                    2 ngay truoc
                                </span>
                            </div>
                            <div className='comment-content'>
                                I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a
                                thousand unknown plants are noticed by me
                            </div>
                            <div className='reply-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.358" height="13.351" viewBox="0 0 13.358 13.351">
                                    <g id="Group_4787" data-name="Group 4787" transform="translate(0.258 0.25)">
                                        <path id="Path_6072" data-name="Path 6072" d="M6.425,0A6.433,6.433,0,0,0,0,6.425,6.349,6.349,0,0,0,1,9.869L.029,12.3a.4.4,0,0,0,.522.522l2.43-.973a6.349,6.349,0,0,0,3.444,1A6.425,6.425,0,0,0,6.425,0Zm0,12.047a5.543,5.543,0,0,1-3.169-.981A.4.4,0,0,0,3.028,11a.4.4,0,0,0-.149.029l-1.756.7.7-1.756a.4.4,0,0,0-.043-.377A5.543,5.543,0,0,1,.8,6.425a5.622,5.622,0,1,1,5.622,5.622Z" fill="#a7a7a7" stroke="#a7a7a7" stroke-width="0.5" />
                                    </g>
                                </svg>
                                Trả lời
                            </div>
                        </div>
                    </div>
                    <div className='card-comment'>
                        <div className='avatar'>
                            <img src={Avatar} alt="" />
                        </div>
                        <div className='card-comment__content'>
                            <div className='name'>
                                Anh Tuan
                                <span className='time'>
                                    2 ngay truoc
                                </span>
                            </div>
                            <div className='comment-content'>
                                I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a
                                thousand unknown plants are noticed by me
                            </div>
                            <div className='reply-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13.358" height="13.351" viewBox="0 0 13.358 13.351">
                                    <g id="Group_4787" data-name="Group 4787" transform="translate(0.258 0.25)">
                                        <path id="Path_6072" data-name="Path 6072" d="M6.425,0A6.433,6.433,0,0,0,0,6.425,6.349,6.349,0,0,0,1,9.869L.029,12.3a.4.4,0,0,0,.522.522l2.43-.973a6.349,6.349,0,0,0,3.444,1A6.425,6.425,0,0,0,6.425,0Zm0,12.047a5.543,5.543,0,0,1-3.169-.981A.4.4,0,0,0,3.028,11a.4.4,0,0,0-.149.029l-1.756.7.7-1.756a.4.4,0,0,0-.043-.377A5.543,5.543,0,0,1,.8,6.425a5.622,5.622,0,1,1,5.622,5.622Z" fill="#a7a7a7" stroke="#a7a7a7" stroke-width="0.5" />
                                    </g>
                                </svg>
                                Trả lời
                            </div>
                        </div>
                    </div>
                </div>

                <div className='medium-col'>
                    <div className='newest-video'>
                        <div className='section__title'>
                            <a href='#' target='_blank'>
                                <h1 className='bd-bottom'>
                                    Video mới nhất
                                </h1>
                            </a>
                        </div>
                        <div className='popular__content'>
                            <div className='card card-row-medium'>
                                <div className='wrap-image'>
                                    <img src={Item} alt="" />
                                </div>
                                <div className='content content-col'>
                                    <div className='wrap-title'>
                                        <h2 className='card__title'>
                                            Bí mật về cách mà các chuyên gia
                                            Taekwondo sử dụng trong thi
                                            đấu chuyên nghiệp
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className='card card-row-medium'>
                                <div className='wrap-image'>
                                    <img src={Item} alt="" />
                                </div>
                                <div className='content content-col'>
                                    <div className='wrap-title'>
                                        <h2 className='card__title'>
                                            Bí mật về cách mà các chuyên gia
                                            Taekwondo sử dụng trong thi
                                            đấu chuyên nghiệp
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className='card card-row-medium'>
                                <div className='wrap-image'>
                                    <img src={Item} alt="" />
                                </div>
                                <div className='content content-col'>
                                    <div className='wrap-title'>
                                        <h2 className='card__title'>
                                            Bí mật về cách mà các chuyên gia
                                            Taekwondo sử dụng trong thi
                                            đấu chuyên nghiệp
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className='card card-row-medium'>
                                <div className='wrap-image'>
                                    <img src={Item} alt="" />
                                </div>
                                <div className='content content-col'>
                                    <div className='wrap-title'>
                                        <h2 className='card__title'>
                                            Bí mật về cách mà các chuyên gia
                                            Taekwondo sử dụng trong thi
                                            đấu chuyên nghiệp
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
