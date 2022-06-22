import  {useState} from "react";
import "./../assets/scss/App.scss";
import CatsCard from "../components/CatsCard";
import MainLayout from "../components/layouts/MainLayout";
import { defaultData} from "../data/data";

const Home: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<Array<number>>([]);

    const handleSelectedColor = (index:number) => {
        if(activeIndex.indexOf(index) != -1) {
            return "#D91667";
        } else {
            return "#1698D9"; 
        }
    }

    const onClickItem = (index:number) => {
        if(activeIndex.indexOf(index) != -1) {
            setActiveIndex(prev => prev.filter((indx) => indx != index));
        } else {
            setActiveIndex(prev => [...prev, index]);
        }
    }

    return (
        <div className="content-wrapper">
            <div className="header">
                Ты сегодня покормил кота?
            </div>
            <div className="cats-cards-wrapper">
                {defaultData.map((item, i) => {
                    return (
                        <CatsCard 
                        key={i}
                        smallHeader={item.smallHeader}
                        bigHeader={item.bigHeader}
                        tasteHeader={item.tasteHeader}
                        quantityPortion={item.quantityPortion}
                        quantityGifts={item.quantityGifts}
                        kg={item.kg}
                        underlineDesc={activeIndex.indexOf(i) !== -1 ? item.underlineDesc[1] : item.underlineDesc[0]}
                        underlineBuy={activeIndex.indexOf(i) !== -1 ? '' : item.underlineBuy}
                        color={handleSelectedColor(i)}
                        onClick={() => onClickItem(i)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Home;