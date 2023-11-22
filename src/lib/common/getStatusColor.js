function getColor(status) {
    switch (status) {
        case "A":
            return "#CFD6DD";
        case "T":
            return "#2CA34D";
        case "P":
            return "#999";
        case "X":
            return "#646C75";
        case "B":
            return "#646C75";
        case "I":
            return "#424242";
        case "R":
            return "#CFD6DD";
        case "N":
            return "#FF7A24";
        case "C":
            return "#FFA700";
        case "W":
            return "#814FDE";
    }
}

// const hexToRgb = hex =>
//     hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
//         ,(m, r, g, b) => '#' + r + r + g + g + b + b)
//         .substring(1).match(/.{2}/g)
//         .map(x => parseInt(x, 16)).join(", ")

export default getColor;