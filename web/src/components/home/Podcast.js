import React from 'react'
import Item from '../../images/podcast/item.png'
export default function Podcast() {
  return (
    <div className='section podcast container'>
      <div className='section__title'>
        <a href='#' target='_blank'>
          <h1 className='bd-bottom'>
            Podcast nổi bật
          </h1>
        </a>
      </div>
      <div className='row'>
        <div className='card card-col big-card'>
          <div className='wrap-image'>
            <img src={Item} alt="" />
          </div>
          <div className='content content-col'>
            <div className='wrap-title'>
              <div className='content__left'>
                <h2 className='card__title'>
                  Taekwondo có lợi ích gì?
                </h2>
                <div className='card__content'>
                  <div className='card__content--author'>
                    <span>BY</span> &nbsp;<span className='name-author'>SY NGUYEN</span>
                    <span className='episode'>5 TAP</span>
                  </div>
                </div>
              </div>
              <div className='content__right play-btn'>
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z" />
                </svg>
              </div>
            </div>
            <div className='content__text'>
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted.
            </div>
          </div>
        </div>
        <div className='card card-col big-card'>
          <div className='wrap-image'>
            <img src={Item} alt="" />
          </div>
          <div className='content content-col'>
            <div className='wrap-title'>
              <div className='content__left'>
                <h2 className='card__title'>
                  Taekwondo có lợi ích gì?ó lợi ích gì?ó lợi ích gì?ó lợi ích gì?ó lợi ích gì?ó lợi ích gì?ó lợi ích gì?
                </h2>
                <div className='card__content'>
                  <div className='card__content--author'>
                    <span>BY</span> &nbsp;<span className='name-author'>SY NGUYEN</span>
                    <span className='episode'>5 TAP</span>
                  </div>
                </div>
              </div>
              <div className='content__right play-btn'>
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z" />
                </svg>
              </div>
            </div>
            <div className='content__text'>
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted.
            </div>
          </div>
        </div>
        <div className='card card-col big-card'>
          <div className='wrap-image'>
            <img src={Item} alt="" />
          </div>
          <div className='content content-col'>
            <div className='wrap-title'>
              <div className='content__left'>
                <h2 className='card__title'>
                  Taekwondo có lợi ích gì?
                </h2>
                <div className='card__content'>
                  <div className='card__content--author'>
                    <span>BY</span> &nbsp;<span className='name-author'>SY NGUYEN</span>
                    <span className='episode'>5 TAP</span>
                  </div>
                </div>
              </div>
              <div className='content__right play-btn'>
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z" />
                </svg>
              </div>
            </div>
            <div className='content__text'>
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
