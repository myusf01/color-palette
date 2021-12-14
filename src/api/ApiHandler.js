import axios from 'axios'
import 'isomorphic-fetch'
function randomize(array) {
  return array[Math.floor(Math.random() * (array.length - 1))]
}
async function getModel() {
  const res = (await axios.get('http://colormind.io/list/')).data
  return randomize(res.result)
}

export default async function getColor() {
  const model = await getModel()
  const res = await fetch('http://colormind.io/api/', {
    method: 'POST',
    body: JSON.stringify({
      model
    })
  })
    .then(res => res.json())
  console.log(res);
  return res
}
