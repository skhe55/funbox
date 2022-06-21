import  {MouseEventHandler} from "react";
import "../assets/scss/CatsCard.scss";
import catImg from './../assets/img/cat.png';

type ICatsCard = {
    smallHeader: string;
    bigHeader: string;
    tasteHeader: string;
    quantityPortion: string;
    quantityGifts: string;
    kg: string;
    underlineDesc: string;
    underlineBuy?: string;
    color: string;
    onClick: MouseEventHandler<HTMLDivElement>;
}

const CatsCard: React.FC<ICatsCard> = ({smallHeader, bigHeader, tasteHeader, quantityPortion, quantityGifts, kg, underlineDesc, underlineBuy = '', color, onClick}) => {

    const stylesSelected = {
        borderRight: `4px solid ${color}`,
        borderBottom: `4px solid ${color}`,
        background: `linear-gradient(-45deg, #FFFFFF 0%, #FFFFFF 93.7%, ${color} 94%, ${color} 94.5%, transparent 94.5%, transparent 100%)`,
        '--before-color': color
    }

    return (
        <div className="card-wrapper">
            <div style={stylesSelected} className="card-wrapper__content" onClick={onClick}>
                <div className="card-content">
                    <div className="card-content__smallHeader">{smallHeader}</div>
                    <div className="card-content__bigHeader">{bigHeader}</div>
                    <div className="card-content__tasteHeader">{tasteHeader}</div>
                    <div className="card-content__quantityPortion--wrapper">
                        <div className="card-content__quantityPortion">{quantityPortion}</div>
                        <div className="card-content__quantityPortion">{quantityGifts}</div>
                    </div>
                </div>
                <img src={catImg} className="cat-img"></img>
                <div style={{background: color}} className="oval-weight-of-packing">
                    <div className="oval-weight-of-packing__text">{kg}</div>
                    <div className="oval-weight-of-packing__text--magnitude">кг</div>
                </div>
            </div>
            {
                underlineBuy === '' ? 
                <div className="underline-description">{underlineDesc}</div> :
                <div className="underline-description">{underlineDesc}, <span onClick={onClick} className="underline-description--buy">{underlineBuy}</span></div>
            }
        </div>
    );
}

export default CatsCard;