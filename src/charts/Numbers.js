import React from 'react';

const Numbers = ({ colorTag, label, value, equivalent }) => {
    let colorPercent = "#000";
    let colorSubtotal = "#C6C7C5";

    return (
        <span style={{ color: colorTag }}>{label}<br />
            <span style={{ color: colorPercent }}>{value}%</span>&nbsp;&nbsp;
                <span style={{ color: colorSubtotal }}>{equivalent}</span>
        </span>
    );
};

export default Numbers;
