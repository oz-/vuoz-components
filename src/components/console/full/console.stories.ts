import VuozConsole from './index.vue'
import VuozConsoleItem from '../item/index.vue'
import VuozButton from '../../button/index.vue'

/**
 * Story
 */
export default {
  component: VuozConsole,
  title: 'Components/Console',
  parameters: {
    layout: 'fullscreen'
  },
  // Arguments (props) description
  argTypes: {
    type: {
      description: 'Type of the console.',
      control: {
        type: 'select',
        options: ['table', 'stack']
      }
    },
    toolbar: {
      description: 'Show toolbar.',
      control: { type: 'boolean' }
    },
    size: {
      description: 'Size of the console\'s items.',
      control: {
        type: 'select',
        options: ['small', 'normal', 'large']
      }
    },
    bordered: {
      description: 'Add a border between lines.',
      control: { type: 'boolean' }
    },
    caller: {
      description: 'Show the caller.',
      control: { type: 'boolean' }
    },
    date: {
      description: 'Show date/time.',
      control: { type: 'boolean' }
    },
    format: {
      description: 'Show date.',
      control: {
        type: 'select',
        options: ['raw', 'iso', 'readable', 'time', 'interval']
      }
    },
    sort: {
      description: 'Sorting order.',
      control: {
        type: 'select',
        options: ['asc', 'desc']
      }
    }
  },
  // Arguments (props) defaults
  args: {
    type: 'table',
    toolbar: true,
    size: 'normal',
    bordered: true,
    caller: true,
    date: true,
    format: 'time',
    sort: 'asc'
  }
}
/**
 * Template
 */
const template = `<div style="height: 100vh; max-height: 100vh; overflow: hidden; margin: 0; display: flex; flex-direction: column;">` +
  `<vuoz-console ref="console" ` +
  `:type="type" :size="size" :caller="caller" :date="date" :format="format" :sort="sort" :toolbar="toolbar" :bordered="bordered">` +
  `</vuoz-console>` +
  `<div style="display: flex;">` +
  `<div style="display: block; margin: 10px;">` +
  `<vuoz-button color="primary" size="small" rounded shadow uppercase border @click="pushLine();">` +
  `<template v-slot:main>Add line</template>` +
  `</vuoz-button>` +
  `</div>` +
  `<div style="display: block; margin: 10px;">` +
  `<vuoz-button color="warning" size="small" rounded shadow uppercase border @click="replaceLine();">` +
  `<template v-slot:main>Replace last line</template>` +
  `</vuoz-button>` +
  `</div>` +
  `</div>` +
  `</div>`
// To be displayed by Storybook
export const Console = (args: any, { argTypes }: any) => ({
  components: { VuozConsole, VuozConsoleItem, VuozButton },
  template,
  methods: {
    // Actual actions
    pushLine() {
      const line = {
        date: new Date(),
        content: 'Another line.',
        caller: 'index.js'
      };
      (this as any).$refs.console.push(line)
    },
    replaceLine() {
      const line = {
        date: new Date(),
        content: 'Another line.',
        caller: 'index.js'
      };
      (this as any).$refs.console.replaceLast(line)
    }
  },
  props: Object.keys(argTypes),
  argTypes
})
