/*
Sample input:

steak frites 34.5
baked salmon 25.6
chicken pot pie 11.82

Bill: horchata 4
Ted: Manhattan 5.1
Tofurkey sliders 7
Kim:
Borscht 5.49
Stuffed cabbage 7.99

*/

export default function parse(text) {
  let result = new Map()
  let currentGroup = 'group'
  let itemCount = 0

  getCleanLines(text).forEach((line) => {
    let item = parseLine(line)
    if (!item) {
      return
    }
    itemCount++
    if (item.group) {
      currentGroup = item.group
    }
    if (item.name) {
      if (!result.get(currentGroup)) {
        result.set(currentGroup, [])
      }
      result.get(currentGroup).push({name: item.name, price: item.price})
    }
  })

  return itemCount === 0 ? null : result
}

function parseLine(line) {
  let group = null
  if (contains(line, ':')) {
    let parts = line.split(':')
    group = parts[0].trim()
    line = parts[1].trim()
  }
  let parts = line.match(/(.*?)\s+(\d+(?:\.\d{1,2})?)/)
  let name = null
  let price = null
  if (parts) {
    name = parts[1]
    price = parseFloat(parts[2])
  }
  if (group === null && name === null) {
    return null
  } else {
    return {
      group: group,
      name: name,
      price: price,
    }
  }
}

function contains(string, subString) {
  return string.indexOf(subString) !== -1
}

function getCleanLines(text) {
  return text.trim().split('\n').filter(line => line.trim());
}
