// https://leetcode.com/problems/traffic-signal-color/solutions/7927084/simulation/

function trafficSignal(timer: number) {
    if (timer === 0) return 'Green';
    if (timer === 30) return 'Orange';
    if (30 < timer && timer <= 90) return 'Red';
    return 'Invalid';
}
