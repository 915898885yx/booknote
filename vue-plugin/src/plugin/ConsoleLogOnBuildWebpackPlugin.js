const pluginName = 'ConsoleLogOnBuildWebpackPlugin'

class ConsoleLogOnBuildWebpackPlugin {
  apply (compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('The webpack build process is starting!!!')
    })
  }
}

// export default ConsoleLogOnBuildWebpackPlugin
module.export = ConsoleLogOnBuildWebpackPlugin