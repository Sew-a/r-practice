import React from "react";
import "../sass/seasons.scss";

const seasonConfig = {
    summer:{
        text:"Lets hit the bich ",
        iconName: "sun"
    },
    winter:{
        text:"Burr its cold",
        iconName: "snowflake"
    }
}


const getSeason = (lat,  month) => {
  if(month > 2 && month < 9){
    return lat > 0 ? "summer" : "winter";
  } else {
      return lat > 0 ? "winter" : "summer";
  }
}

export const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]

    return (
        <div className="seasons">
            <i className={`top-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`bot-right massive ${iconName} icon`} />
        </div>
    )
}


