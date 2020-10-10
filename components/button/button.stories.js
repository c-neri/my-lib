import { storiesOf } from '@storybook/vue'
import JTableRow from './button'

storiesOf('my-table', module)
  .add('normal', () => ({
    components: { JTableRow },
    template:
    `
      <JTableRow
        :values="values"
      />
    `,
    data: () => ({
      values: [
        'José Silva',
        'email@email.test@test.com'
      ]
    })
  }))
  .add('cool', () => ({
    components: { JTableRow },
    template:
    `
      <JTableRow
        :values="values"
      />
    `,
    data: () => ({
      values: [
        'me test',
        'email@email.test@test.com'
      ]
    })
  }))