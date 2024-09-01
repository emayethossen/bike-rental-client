import Slider from "../components/ui/Carousel"
import FeatureBikes from "../components/ui/FeatureBikes";
import FeatureSection from "../components/ui/FeatureSection"
import NewsletterSubscription from "../components/ui/NewsletterSubscription";
import Testimonials from "../components/ui/Testimonials";
import WhyChooseUs from "../components/ui/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Slider />
            <FeatureBikes />
            <FeatureSection />
            <WhyChooseUs />
            <Testimonials />
            <NewsletterSubscription />
        </div>
    )
}

export default Home;