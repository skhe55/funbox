import * as React from "react";
import "../../assets/scss/MainLayout.scss";

type IMainLayout = {
    children: JSX.Element | JSX.Element[];
}

const MainLayout: React.FC<IMainLayout> = ({children}) => {
    return (
        <div className="Layout">
            {children}
        </div>
    );
}

export default MainLayout;