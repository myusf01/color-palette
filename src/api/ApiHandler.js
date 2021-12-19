import 'isomorphic-fetch'

async function getModel() {
  const modelList = (
    await fetch('http://colormind.io/list/').then(res => res.json())
  ).result

  const randomModel =
    modelList[Math.floor(Math.random() * (modelList.length - 1))]
  return randomModel
}

export default async function getColors() {
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
  const model = await getModel()
  const getColors = (
    await fetch('http://colormind.io/api/', {
      method: 'POST',
      body: JSON.stringify({
        model
      })
    }).then(res => res.json())
  ).result

  const result = getColors.map(array => {
    return convertRGBtoHEX(array)
  })
  return result
}
