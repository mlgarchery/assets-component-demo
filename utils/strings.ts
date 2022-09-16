export const capitalize = (s: string) => {
    if(s.length===0) return s;
    return `${s.charAt(0).toUpperCase()}${s.slice(1)}`
}

export const toPercentage = (s: string) => parseFloat(s).toFixed(4) * 100;
