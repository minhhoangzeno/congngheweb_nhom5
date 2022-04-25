import React from 'react'

export default function SignInfo() {
    return (
        <div className='section sign-info container'>
            <div className='bd-top'></div>
            <div className='wrap'>
                <div className='section__title'>
                    <a href='#' target='_blank'>
                        <h1 className=''>
                            Đăng ký nhận thông tin mới nhất
                        </h1>
                    </a>
                </div>
                <div className='sign-info__content'>
                    <div className='sign-info__content--left'>
                        Chúng mình sẽ cập nhật những kiến thức về năng suất mới nhất hàng tuần và gửi đến email cho bạn!
                    </div>
                    <div className='sign-info__content--right'>
                        <input placeholder='Địa chỉ email' className='sign-mail' />
                        <div className='submit-btn'>
                            ĐĂNG KÝ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
