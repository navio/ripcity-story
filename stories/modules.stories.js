
import React from 'react';
import RC from 'ripcity';
import 'ripcity/dist/styles.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';


const stories = storiesOf('Modules', module);

stories.addDecorator(withKnobs);

stories
  .add('Button', () => { 
        const type = select('Type', {primary: 'primary', secondary:'secondary', active:'active'}, 'primary');
        const inline = boolean('Inline',true);
  
        return (<RC.Button buttonType={type} inline={inline} onClick={action('clicked')}>Hello Button</RC.Button>)
       })
