import HomeComponent from "../components/homeComponents/HomeComponents";
import HomeHeader from "../components/homeHeader/HomeHeader";
import Reviews from "../components/reviews/Reviews";

function Home () {

    return (
        <>

        <HomeHeader />
        <HomeComponent />
        <Reviews />
        </>
    );
};

export default Home;