import myButton from './button'

export default { title: 'Components/Button' };

export const Rounded = () => ({
  components: { myButton },
  template: '<my-button :value="value" isRounded />',
  data(){
    return {
      value:'hello!'
    }
  }
});

export const Big = () => ({
  components: { myButton },
  template: '<my-button :value="value" isRounded isBig />',
  data(){
    return {
      value:'Big'
    }
  }
});










// import { storiesOf } from '@storybook/vue'
// storiesOf('my-button', module)
//   .add('normal', () => ({
//     components: { myButton },
//     template:
//     `
//       <my-button :value="valueButton"><my-button/>
//     `,
//     data: () => ({
//       valueButton: 'hello!'
//     })
//   }))
//   .add('rounded', () => ({
//     components: { myButton },
//     template:
//     `
//     <my-button :value="valueButton" isRounded><my-button/>
//     `,
//     data: () => ({
//       valueButton: 'subscribe now!'
//     })
//   }))
//   .add('big', () => ({
//     components: { myButton },
//     template:
//     `
//     <my-button :value="valueButton" isBig><my-button/>
//     `,
//     data: () => ({
//       valueButton: 'Button'
//     })
//   }))
//   .add('big and round', () => ({
//     components: { myButton },
//     template:
//     `
//     <my-button :value="valueButton" isBig isRounded><my-button/>
//     `,
//     data: () => ({
//       valueButton: 'Button'
//     })
//   }))