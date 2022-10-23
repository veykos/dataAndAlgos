
type ItemArray = [number, string]

export default function updateInventory(arr1:Array<ItemArray>,arr2:Array<ItemArray>) {

    const curInv = arr1.slice();
    const newInv = arr2.slice();
    const curInvAsObj:Record<string,number> = {}
    const newInvAsObj:Record<string,number> = {}
    for (let i = 0; i < curInv.length; i++) {
        curInvAsObj[curInv[i][1]] = curInv[i][0]
    }
    for (let i = 0; i< newInv.length; i++) {
        newInvAsObj[newInv[i][1]] = newInv[i][0]
    }
    
    for (let key in newInvAsObj) {
        if (key in curInvAsObj) {
            curInvAsObj[key] = curInvAsObj[key] + newInvAsObj[key]
        } else {
            curInvAsObj[key] = newInvAsObj[key] 
        }
    }

    const updatedInv:Array<ItemArray> = []
    for (let key in curInvAsObj) {
        updatedInv.push([curInvAsObj[key], key])
    }
    return updatedInv.sort((a,b) => a[1].localeCompare(b[1]))

}

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])