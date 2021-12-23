import 'isomorphic-fetch'

export async function getAllModels() {
  const modelList = (
    await fetch(
      'https://cors-everywhere.herokuapp.com/http://colormind.io/list/'
    ).then(res => res.json())
  ).result
  return modelList
}
export async function getRandomModel() {
  const models = await getAllModels()
  const randomModel = models[Math.floor(Math.random() * (models.length - 1))]
  return randomModel
}
export async function getColors(setModel) {
  function convertRGBtoHEX(colorArray) {
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

  let model = setModel
  if (!model) {
    model = await getRandomModel()
  }
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

  const result = getColors.map(array => {
    return convertRGBtoHEX(array)
  })
  return result
}
