import React from "react";

const Qualiti = ({ color, name }) => {
    return (
        <span className={"badge m-1 bg-" + color}>
			{name}
		</span>
    );
};

export default Qualiti
