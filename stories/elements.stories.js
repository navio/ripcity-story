
import React from 'react';
import RC from 'ripcity';
import 'ripcity/dist/styles.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import {colors, backgrounds, sizes} from '../definitions';

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);
// Checkbox DropDown Icon Image Link List Paragraph 
// Slider Text TextArea TextInput Histogram 
// Meter RadioButton Icon Search Pipe Divider
stories
  .add('Alert', () => { 
        const type = select('Background Color', backgrounds, 'error');
        const message = text("Text","Message");
        const id = text("ID","");
        const border = boolean('Border',true);
        const spacingTop = select('SpacingTop', sizes, 'base');
        const spacing = select('Spacing', sizes, 'base');
    
        return (<RC.Box><RC.GridRow spacingTop="large"><RC.GridColumn gridUnits="4">
                <RC.Alert alertType={type} id={id} >{message}</ RC.Alert></RC.GridColumn>
                </RC.GridRow></RC.Box>)
       })
  .add('Button', () => { 
        const type = select('Type', {primary: 'primary', secondary:'secondary', active:'active'}, 'primary');
        const inline = boolean('Inline',true);
        const message = text("Text","Button");
  
        return (<RC.GridRow spacingTop="large" textAlign="center">
                <RC.Button buttonType={type} inline={inline} onClick={action('clicked')}>{message}</RC.Button>
                </RC.GridRow>
                )
       })
  .add('Box', () => { 
        const background = select('Background Color', backgrounds, 'base');
        const message = text("Text","Children");
        const border = boolean('Border',true);
        const spacingTop = select('SpacingTop', sizes, 'base');
        const spacing = select('Spacing', sizes, 'base');
    
        return (<RC.Box><RC.GridRow spacingTop="large" textAlign="center">
                <RC.Box hasBorder={border} backgroundColor={background}>{message}</RC.Box></RC.GridRow></RC.Box>)
       })
    
    .add('Checkbox', () => { 
        const background = select('Background Color', backgrounds, 'base');
        const message = text("Text","Children");
        const border = boolean('Border',true);
        const spacingTop = select('SpacingTop', sizes, 'base');
        const spacing = select('Spacing', sizes, 'base');
    
        return (<RC.Box><RC.GridRow spacingTop="large" textAlign="center">
                <RC.Checkbox >{message}</RC.Checkbox></RC.GridRow></RC.Box>)
       })
