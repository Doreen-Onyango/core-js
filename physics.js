function getAcceleration({ f, m, Δv, Δt, t, d }) {
    if (f !== undefined && m !== undefined && m !== 0) {
        return f / m
    }
    if (Δv !== undefined && Δt !== undefined && Δt !== 0) {
        return Δv / Δt
    }
    if (d !== undefined && t !== undefined && t !== 0) {
        return (2 * d) / (t * t)
    }
    return "impossible"
}
console.log(getAcceleration({})); 
console.log(getAcceleration({ f: 20, m: 4 }));
console.log(getAcceleration({ Δv: 120, Δt: 50 }));
console.log(getAcceleration({ d: 10, t: 2 }));
