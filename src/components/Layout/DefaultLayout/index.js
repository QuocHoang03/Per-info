import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Slidebar from '../components/Slidebar';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  // alert('Web mình chưa tương thích với SmartPhone các bạn dùng Laptop để mở nhé');
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Slidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
