import React from 'react';
import useEditorContext from '../../hooks/useEditorContext';
import Textinput from './Textinput';
import InputStyle from './InputForStyles';
import StyleToggleButton from './StyleToggleButton';
import FontSizeInput from './FontSize';
import AlignmentButtonGroup from './FontAling';


const PropertyBlock = () => {
  const { selected, template } = useEditorContext();
  const { section, id } = selected || {};
  const blockList = template?.[section] || [];
  const block = blockList.find((b) => b.id === id);

  if (!block) return null;
  
  const renderFields = () => {
    switch (block.type) {
      case 'text':
        return (
          <>
            <Textinput label="Text Content" propKey="content" />
            <InputStyle label="Color" propKey="color" type="color" />
            <FontSizeInput/>
            <InputStyle label="Font Family" propKey="fontFamily"  type="select" 
                  options={[
                      'Roboto',
                      'Open Sans',
                      'Lato',
                      'Montserrat',
                      'Playfair Display',
                      'Merriweather',
                      'Quicksand',
                      'Raleway',
                      'PT Serif',
                      'Dancing Script'
                    ]}/>
            <AlignmentButtonGroup/>
          <div className="textStyleBtn">
              <span>Font Style</span>
              <div className="FontStyle">
                <StyleToggleButton propKey="fontWeight" value="bold"  label="B" />
              <StyleToggleButton propKey="fontStyle" value="italic" label="I" />
              <StyleToggleButton propKey="textDecoration" value="underline" label="U" />  
              </div>
            </div>
          </>
        );
      case 'button':
        return (
          <>
            <Textinput label="Button Text" propKey="content" />
            <Textinput label="Href" propKey="href" />
            <InputStyle label="Color" propKey="color" type="color" />
            <FontSizeInput/>
            <AlignmentButtonGroup/>
            <InputStyle label="Font Family" propKey="fontFamily"  type="select" 
                  options={[
                      'Roboto',
                      'Open Sans',
                      'Lato',
                      'Montserrat',
                      'Playfair Display',
                      'Merriweather',
                      'Quicksand',
                      'Raleway',
                      'PT Serif',
                      'Dancing Script'
                    ]}/>
            <InputStyle label="backgroundColor" propKey="backgroundColor" type="color" />
           <div className="textStyleBtn">
              <span>Font Style</span>
              <div className="FontStyle">
                <StyleToggleButton propKey="fontWeight" value="bold"  label="B" />
              <StyleToggleButton propKey="fontStyle" value="italic" label="I" />
              <StyleToggleButton propKey="textDecoration" value="underline" label="U" />  
              </div>
            </div>
          </>
        );

      case 'img':
        return (
          <>
            <Textinput label="Image URL" propKey="src" />
            <Textinput label="Alt Text" propKey="alt" />
            <InputStyle label="height" propKey="height" type="text" />
            <InputStyle label="width" propKey="width" type="text" />
            <AlignmentButtonGroup/>
          </>
        );

      case 'link':
        return (
          <>
            <Textinput label="Link Text" propKey="content" />
            <Textinput label="Href" propKey="href" />
            <InputStyle label="color" propKey="color" type="color" />
            <FontSizeInput/>   
            <InputStyle label="Font Family" propKey="fontFamily"  type="select" 
                  options={[
                      'Roboto',
                      'Open Sans',
                      'Lato',
                      'Montserrat',
                      'Playfair Display',
                      'Merriweather',
                      'Quicksand',
                      'Raleway',
                      'PT Serif',
                      'Dancing Script'
                    ]}/>
            <AlignmentButtonGroup/>
            <div className="textStyleBtn">
              <span>Font Style</span>
              <div className="FontStyle">
                <StyleToggleButton propKey="fontWeight" value="bold"  label="B" />
              <StyleToggleButton propKey="fontStyle" value="italic" label="I" />
              <StyleToggleButton propKey="textDecoration" value="underline" label="U" />  
              </div>
            </div>
          </>
        );
      default:
        return <p>No editable properties for this block.</p>;
    }
  };

  return <div className="property-panel">{renderFields()}</div>;
};

export default PropertyBlock;

