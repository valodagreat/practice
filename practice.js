const offers = [['New store','diamond',50],['shiny rockshop','ruby',10],['Sample shop','jade',5]]
const preferences = ['diamond','ruby','emerald','jade']

const gemStones = (offers,preferences)=>{
    let result = []
    let final
    
    const results = preferences.map(item => {
        return ([item,0])
    })

    offers.map(offer => {
        preferences.map(pref => {
            if(offer[1]===pref){
                result.push([offer[1],offer[2]])
                let modified= results.concat(result)
                const object = Object.fromEntries(modified);
                final = Object.values(object)
                //return(final);
        }})
    })
    return final
    
}
const latest = gemStones(offers,preferences);
console.log(latest)

/*
offers.forEach((offer) => {
        preferences.forEach((preference,index,array)=>{
            const results = preferences.map(item => {
                return ([item,0])
            })

        if(offer[1]===preference){
            result.push([offer[1],offer[2]])
            let modified= results.concat(result)
            const object = Object.fromEntries(modified);
            const final = Object.values(object)
            console.log(final)
            return preference
        }
    })
    })
*/