import Main from '.'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Basic = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, React, NextJS e Styled Components'
    )}
  />
)
