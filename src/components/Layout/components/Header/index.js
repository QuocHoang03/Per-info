import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '../../../../assets/image';
import { faFacebookF, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        {/* header left */}
        <div className={cx('header-left')}>
          <div className={cx('avatar')}>
            <img className={cx('avatar-img')} src={images.doraemon} alt="avatar" />
          </div>
          <div className={cx('profile')}>
            <div className={cx('name')}>Phạm Quốc Hoàng</div>
            <div className={cx('description')}>
              <FontAwesomeIcon className={cx('description-icon')} icon={faGraduationCap} />
              <span className={cx('description-edu')}>Sinh Viên</span>
            </div>
            <div className={cx('contacts')}>
              <a href="https://www.facebook.com/quochoang.pham.3701">
                <FontAwesomeIcon className="contact-item" icon={faFacebookF} />
                <FontAwesomeIcon className="contact-item" icon={faTiktok} />
                <FontAwesomeIcon className="contact-item" icon={faInstagram} />
                <FontAwesomeIcon className="contact-item" icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
        {/* header right */}
        <div className={cx('header-right')}>Header2</div>
      </div>
    </header>
  );
}

export default Header;
