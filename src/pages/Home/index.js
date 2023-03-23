import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const projects = [
  {
    id: 1,
    name: 'Tiktok Clone',
    link: 'https://quochoang03.github.io/TheBand/',
    img: 'https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?cs=srgb&dl=pexels-karyme-fran%C3%A7a-1535907.jpg&fm=jpg',
  },
  {
    id: 2,
    name: 'The Band',
    link: 'https://quochoang03.github.io/TheBand/',
    img: 'https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?cs=srgb&dl=pexels-karyme-fran%C3%A7a-1535907.jpg&fm=jpg',
  },
  {
    id: 3,
    name: 'Project placeholder',
    link: 'https://quochoang03.github.io/TheBand/',
    img: 'https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?cs=srgb&dl=pexels-karyme-fran%C3%A7a-1535907.jpg&fm=jpg',
  },
  {
    id: 4,
    name: 'Project placeholder',
    link: 'https://quochoang03.github.io/TheBand/',
    img: 'https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?cs=srgb&dl=pexels-karyme-fran%C3%A7a-1535907.jpg&fm=jpg',
  },
  {
    id: 5,
    name: 'Project placeholder',
    link: 'https://quochoang03.github.io/TheBand/',
    img: 'https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?cs=srgb&dl=pexels-karyme-fran%C3%A7a-1535907.jpg&fm=jpg',
  },
  {
    id: 6,
    name: 'Project placeholder',
    link: 'https://quochoang03.github.io/TheBand/',
    img: 'https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?cs=srgb&dl=pexels-karyme-fran%C3%A7a-1535907.jpg&fm=jpg',
  },
  {
    id: 7,
    name: 'Project placeholder',
    link: 'https://quochoang03.github.io/TheBand/',
    img: 'https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?cs=srgb&dl=pexels-karyme-fran%C3%A7a-1535907.jpg&fm=jpg',
  },
  {
    id: 8,
    name: 'Project placeholder',
    link: 'https://quochoang03.github.io/TheBand/',
    img: 'https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?cs=srgb&dl=pexels-karyme-fran%C3%A7a-1535907.jpg&fm=jpg',
  },
];

function Home() {
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
                  {console.log(project.img)}
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
        <div className={cx('motivation-content')}>
          <div className={cx('motivation-slidebar')}></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
