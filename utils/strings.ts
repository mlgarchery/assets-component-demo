export const capitalize = (s: string) => {
    if(s.length===0) return s;
    return `${s.charAt(0).toUpperCase()}${s.slice(1)}`
}

export const toPercentage = (n: string | number) => {
    if(typeof(n)==='string')
        n = Number.parseFloat(n)
    return (n * 100).toFixed(2);
}
