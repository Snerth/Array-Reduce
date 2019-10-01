const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

const lw = words.reduce((acc, e) => {
    if(e.length > 6) {
    acc.push(e)
    }
    return acc
}, [])