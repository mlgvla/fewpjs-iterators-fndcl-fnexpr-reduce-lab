const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries

totalBatteries = batteryBatches.reduce(function(acc, batches){
    return acc + batches
})

