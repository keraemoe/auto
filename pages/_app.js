import Layouts from "@/components/Layouts/Layouts";
import "@/styles/globals.css";
import "@/styles/FooterSlider.css"
import '@/styles/sliderTitle.css'
import '@/styles/SwiperVideo.css'
export default function App({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
