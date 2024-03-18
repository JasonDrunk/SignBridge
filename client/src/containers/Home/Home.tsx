import ImageSlider from '../../components/HomepageImgSlider/ImgSlider';
import AvailableModule from '../../components/HomepageModule/AvailableModule';
import Company from '../../components/HomepageCompany/Company';
import Youtube from '../../components/HomepageYoutube/Youtube'; 
import Location from '../../components/HomepageLocation/Location';

export default function Home() {
  return (
    <>
      <ImageSlider />
      <AvailableModule />
      <Company />
      <Youtube />
      <Location />
    </>
  )
}

