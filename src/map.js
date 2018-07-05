import axios from 'axios'

export function getMap(name) {
  // let file = (name.slice(-5) === '.json') ? name : name + '.json'
  // I don't want to mess with asynchronousity quite yet
  // axios.get('/assets/map/' + file)
  // .then(res => {
  //   readMap(res.data)
  // })
  // .catch(err => console.error(err))

}

export function readMap(mapJson) {
  // expect map as json
  // let map = JSON.parse(mapJson)
  
  // only for now actually until we hook this up to a db + api
  // it's just an object
  let map = mapJson
  console.log(map)



}

export const maps = {
  maps: [
    {
      name: 'test',
      
    }
  ]
}