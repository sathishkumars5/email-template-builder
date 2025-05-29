import React from 'react'
import { structure } from '../../data/structure';

function camelToKebab(changeCase) {
  return changeCase.replace(/[A-Z]/g, x => '-' + x.toLowerCase());
}

function inlineStyle(objstyle) {
  return Object.entries(objstyle)
    .map(([key, value]) => `${camelToKebab(key)}:${value}`)
    .join(';');
}

const generateHtml = () => {
  let html = '';

  structure.templetes.forEach(templateObj => {
    
    Object.entries(templateObj).forEach(([templateId, templateData]) => {
      html += `<div style="border:1px solid lightblue; margin:20px; padding:10px;">`;

      html += `<div style="${inlineStyle(templateData.headerStyle || {})}">`;
      templateData.header?.forEach(block => {
        if (block.type === 'text') {
          html += `<p style="${inlineStyle(block.style)}">${block.content}</p>`;
        } else if (block.type === 'img') {
          html += `<img src="${block.src}" alt="${block.alt || ''}" style="${inlineStyle(block.style)}"/>`;
        } else if (block.type === 'button') {
          html += `<button style="${inlineStyle(block.style)}">${block.content}</button>`;
        }
      });
      html += `</div>`;

      html += `<div>`;
      templateData.Container?.forEach(block => {
        if (block.type === 'text') {
          html += `<p style="${inlineStyle(block.style)}">${block.content}</p>`;
        } else if (block.type === 'img') {
          html += `<img src="${block.src}" alt="${block.alt || ''}" style="${inlineStyle(block.style)}"/>`;
        } else if (block.type === 'button') {
          html += `<button style="${inlineStyle(block.style)}">${block.content}</button>`;
        }
      });
      html += `</div>`;

      html += `<div>`;
      templateData.footer?.forEach(block => {
        if (block.type === 'text') {
          html += `<p style="${inlineStyle(block.style)}">${block.content}</p>`;
        } else if (block.type === 'img') {
          html += `<img src="${block.src}" alt="${block.alt || ''}" style="${inlineStyle(block.style)}"/>`;
        } else if (block.type === 'button') {
          html += `<button style="${inlineStyle(block.style)}">${block.content}</button>`;
        }
      });
      html += `</div>`;

      html += `</div>`;
    });
  });
  return html;
};

const Htmlconvert = () => {
  const htmlString = generateHtml();
  const fullHtml=`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Email Template</title>
      </head>
      <body>
        ${htmlString}
      </body>
    </html>`

  return (fullHtml);
};

export default Htmlconvert;
