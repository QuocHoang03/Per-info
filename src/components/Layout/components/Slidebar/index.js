import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Slidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBullseye, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Slidebar() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('link')}>
        <Link className={cx('link-home', 'link-item', 'action')} to={'/'}>
          <FontAwesomeIcon className={cx('icon')} icon={faUser} />
          <span className={cx('description')}>BẢN THÂN</span>
        </Link>
      </div>
      <div className={cx('link')}>
        <Link className={cx('link-education', 'link-item')} to={'/education'}>
          <FontAwesomeIcon className={cx('icon')} icon={faBook} />
          <span className={cx('description')}>HỌC VẤN</span>
        </Link>
      </div>
      <div className={cx('link')}>
        <Link className={cx('link-target', 'link-item')} to={'/target'}>
          <FontAwesomeIcon className={cx('icon')} icon={faBullseye} />
          <span className={cx('description')}>MỤC TIÊU</span>
        </Link>
      </div>
      <div className={cx('link')}>
        <Link className={cx('link-hobby', 'link-item')} to={'/hobby'}>
          <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
          <span className={cx('description')}>SỞ THÍCH</span>
        </Link>
      </div>
    </div>
  );
}

export default Slidebar;
