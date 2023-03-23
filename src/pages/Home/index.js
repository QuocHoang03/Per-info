import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Home.module.scss';
import SliderHome from './SliderHome';
import { dataProjects } from './data';

const cx = classNames.bind(styles);
function Home() {
  const [projects] = useState(dataProjects);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('introduce')}>
        <div className={cx('introduce-heading')}>Giới thiệu</div>
        <span className={cx('introduce-partition')} />
        <div className={cx('introduce-content')}>
          <p>
            Mình tên là Hoàng, hiện tại đang là sinh viên của trường ĐH Duy Tân Đà Nẵng và học chuyên ngành Công Nghệ
            Thông Tin.
          </p>
          <p>
            Thời gian gần đây mình tình cờ biết đến trang F8, các video ở đây dạy rất tận tâm và dễ hiểu. Sau 1 khoảng
            thời gian học tập tại đây, mình đã hoàn thành khóa JavaScript căn bản và sẽ tiếp tục học các khóa khác để
            vươn tới mục tiêu có thể thực tập và đi làm trong tương lai!
          </p>
        </div>
      </div>
      <div className={cx('description')}>
        <div className={cx('description-heading')}>Sản phẩm của mình</div>
        <span className={cx('description-partition')} />
        <div className={cx('description-content')}>
          {projects.map((project, index) => {
            return (
              <div key={index} className={cx('project')}>
                <a className={cx('project-img')} href={project.link}>
                  <img className={cx('img')} src={project.img} alt="Error" />
                </a>
                <div className={cx('project-name')}>{project.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={cx('motivation')}>
        <div className={cx('motivation-heading')}>Những câu nói cho mình cảm hứng</div>
        <span className={cx('motivation-partition')} />
        {/* demo */}
        <div className={cx('motivation-content')}>
          <div className={cx('motivation-slidebar')}>
            <SliderHome />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
