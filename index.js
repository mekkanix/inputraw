import InputRaw from './src/inputRaw'

const getFormattedConfig = (config) => {
  return {}
}

// Entrypoint

let inputRawPkg = null
function inputRaw(selector, config = null) {
  let initError = false
  let selectorAsConfig = false
  if (!config) {
    selectorAsConfig = true
    if (typeof selector !== 'object') {
      console.error('[InputRaw] You must specify a configuration object.')
      initError = true
      return
    }
  } else {
    if (typeof selector !== 'string') {
      console.error('[InputRaw] The provided element selector is not of type "string".')
      initError = true
      return
    }
    if (typeof config !== 'object') {
      console.error('[InputRaw] You must specify a valid configuration object.')
      initError = true
      return
    }
  }
  // Valid configuration
  if (!initError) {
    const autoMount = !selectorAsConfig
    const computedConf = selectorAsConfig ? selector : config
    const computedSelector = !selectorAsConfig ? selector : null
    const formattedConf = getFormattedConfig(computedConf)
    inputRawPkg = new InputRaw(
      computedSelector,
      formattedConf,
      autoMount
    )

    console.log(inputRawPkg);
  }

  return inputRaw
}

// Public API

inputRaw.attach = function() {
  console.log('Soon...');
}

export default inputRaw
