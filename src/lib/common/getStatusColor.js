function getColor(status) {
    switch (status) {
        case "A":
            return "var(--ticket-status-answered-background)";
        case "T":
            return "var(--ticket-status-chat-background)";
        case "P":
            return "var(--ticket-status-phone-background)";
        case "X":
            return "var(--ticket-status-deleted-background)";
        case "B":
            return "";
        case "I":
            return "var(--ticket-status-deleted-background)";
        case "R":
            return "var(--ticket-status-resolved-background)";
        case "N":
            return "var(--ticket-status-new-background)";
        case "C":
            return "var(--ticket-status-open-background)";
        case "W":
            return "var(--ticket-status-postponed-background)";
    }
}

// const hexToRgb = hex =>
//     hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
//         ,(m, r, g, b) => '#' + r + r + g + g + b + b)
//         .substring(1).match(/.{2}/g)
//         .map(x => parseInt(x, 16)).join(", ")

export default getColor;