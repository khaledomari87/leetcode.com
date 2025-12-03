// https://leetcode.com/problems/earliest-finish-time-for-land-and-water-rides-i/solutions/7036578/javacpython-straight-forward-solution/comments/3254237/

const { min, max } = Math, inf = Infinity;
function earliestFinishTime(
    landStartTime: number[],
    landDuration: number[],
    waterStartTime: number[],
    waterDuration: number[],
) {
    const [land, water] = [[landStartTime, landDuration], [waterStartTime, waterDuration]]
        .map(([st, du]) => st.reduce((r, s, i) => min(r, s + du[i]), inf));

    const [waterLand, landWater] =
        ([[landStartTime, landDuration, water], [waterStartTime, waterDuration, land]] as const)
            .map(([st, du, m]) => st.map((s, i) => max(s, m) + du[i]).reduce((res, v) => min(res, v), inf));

    return min(waterLand, landWater);
}
