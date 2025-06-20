import "./Content.css";
import ContentTop from '../../components/Dashbord/ContentTop/ContentTop';
import ContentMain from '../../components/Dashbord/ContentMain/ContentMain';

const Content = () => {
  return (
    <div className='main-content'>
      <ContentTop />
      <ContentMain />
    </div>
  )
}

export default Content
