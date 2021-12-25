import 'isomorphic-fetch'

export async function getAllModels() {
  // fetch all models from api url.
  // due to our api is http we should prevent CORS and mix content errors
  // to solve this I'm using https://cors-everywhere.herokuapp.com api.
  const modelList = (
    await fetch(
      'https://cors-everywhere.herokuapp.com/http://colormind.io/list/'
    ).then(res => res.json())
  ).result
  return modelList
}
export async function getRandomModel() {
  // return random model from list
  const models = await getAllModels()
  const randomModel = models[Math.floor(Math.random() * (models.length - 1))]
  return randomModel
}

export async function getColors(setModel) {
  function convertRGBtoHEX(colorArray) {
    // Colors that came from api are RGB formatted.
    // we want to use HEX format, to convert RGB => HEX
    // I'm using this solution from StackOverflow
    // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

    const r = colorArray[0]
    const g = colorArray[1]
    const b = colorArray[2]
    return (
      '#' +
      ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase()
    )
  }
  // set model that we want to fetch from api
  let model = setModel
  // if user doesn't set the model we will select random model from list.
  if (!model) {
    model = await getRandomModel()
  }
  // fetch palette from api link than return result
  const getColors = (
    await fetch(
      'https://cors-everywhere.herokuapp.com/http://colormind.io/api/',
      {
        method: 'POST',
        body: JSON.stringify({
          model
        })
      }
    ).then(res => res.json())
  ).result

  // map palette to convert all colors from RGB to HEX
  // return hex codes stored in array
  const result = getColors.map(array => {
    return convertRGBtoHEX(array)
  })
  return result
}
