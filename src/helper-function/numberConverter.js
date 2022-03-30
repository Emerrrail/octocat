export const thousand = (input) => {
    const output = new Intl.NumberFormat('en-IN').format(input)

    return output
}

export const numberShorten = (input) => {
    if (input >= 1000 && input < 1000000) {
        const k = Math.round(input / 1000)
        return `${k}k`
    } else if (input >= 1000000) {
        const m = Math.round(input / 1000000)
        return `${m}M`
    } else {
        return input
    }
}
