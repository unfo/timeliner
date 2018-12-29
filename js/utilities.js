var maxFinder = (lord, usurper) => { return (usurper > lord ? usurper : lord); }

        
function normalizeValues(key_values, max_val = 100, min_val = 0) {
    let current_max = Object.values(key_values).reduce(maxFinder);
    let current_min = Object.values(key_values).map(v => { return (-1 * v); }).reduce(maxFinder);
    let ratio = (max_val - min_val) / (current_max - current_min);
    let normalizedValues = new Map();
    Object.keys(key_values).forEach(key => {
        let val = key_values[key];
        let new_val = (ratio * val);
        normalizedValues[key] = new_val;
    });
    return normalizedValues;

}

function groupDates(key_values, maxGroups) {
    let group_count = Object.keys(key_values).length;
    if (group_count <= maxGroups) {
        return key_values;
    }

    let group_size = Math.ceil(group_count / maxGroups);
    var group_number = 0;
    var grouped = new Map();
    Object.keys(key_values).sort().forEach((key, index) => {
        let group_changed = false;
        if (index % group_size == 0) {
            group_number += 1;
            group_changed = true;
        }
        let group_name = ("" + group_number + "-grp").padStart(8, "0");
        grouped[group_name] = (group_changed ? 0 : grouped[group_name]) + key_values[key]
    });
    return grouped;
}

function findMaxGapForGroups(gap_counts, count, min, max) {
    let max_gap_found = max;
    for (max_gap_found = max; max_gap_found >= min; max_gap_found--) {
        // console.log(`${max_gap_found} can fit ${gap_counts[max_gap_found]}`);
        if (gap_counts[max_gap_found] >= count) {
            // console.log("BREAK!")
            break;
        } 
    }
    return max_gap_found;
}