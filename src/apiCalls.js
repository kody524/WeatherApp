const APIKEY = 'b82c02c55c4d42649b9a7195b584cac3'


export async function getCurrent(zip,setCurrent){
    const data = await fetch(`https://api.weatherbit.io/v2.0/current?postal_code=${zip}&key=${APIKEY}`,{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
        }
})
const response = await data.json()
console.log(response)
setCurrent(response)
}