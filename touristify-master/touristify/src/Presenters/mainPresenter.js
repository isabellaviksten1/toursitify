import MainView from "../Views/mainView"
import React from "react";
export default function MainPresenter(props) {

    const [currentType, setCurrentType] = React.useState(props.model.types)

    React.useEffect(function () {
        function observer() {
            setCurrentType(props.model.types);
        }
        props.model.addObserver(observer);
        return function () { props.model.removeObserver(observer); }
    }, []);

    return (
        <MainView
            changeTypes={function () {

                if (String(currentType) === String(['subway_station', "train_station", "transit_station"])) {

                    return "travel stations"
                }

                else {

                    return String(currentType)
                }}
            }
        />
    )
}