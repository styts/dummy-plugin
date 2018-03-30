'use strict'

class Plugin {
  constructor(config, context) {
    this.config = config
    this.context = context
  }

  async export (data) {
    // dummy plugin is empty
  }
}

module.exports = Plugin
