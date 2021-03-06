export const getElementChildByPropKey = (element, key) => {
  for (const child of element.children) {
    const childAttrValue = child.getAttribute('data-ir-prop-key')
    if (childAttrValue && childAttrValue === key) {
      return child
    }
  }
  return null
}

export const getElementChildByClass = (element, cssClass) => {
  for (const child of element.children) {
    if (child.classList.contains(cssClass)) {
      return child
    }
  }
  return null
}

export const findElementChildByClass = (element, cssClass) => {
  for (const child of element.children) {
    if (child.classList.contains(cssClass)) {
      return child
    } else {
      return findElementChildByClass(child, cssClass)
    }
  }
  return null
}

export const findElementParentByClass = (element, ccsClass) => {
  if (!element || element.classList.contains(ccsClass)) {
    return element
  } else if (element.parentElement) {
    return findElementParentByClass(element.parentElement, ccsClass)
  }
  return null
}
