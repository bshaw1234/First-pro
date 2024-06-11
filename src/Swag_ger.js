// SwaggerUIComponent.js
import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const CustomPlugin = () => ({
  wrapComponents: {
    operation: (Original, system) => (props) => {
      // You can customize this logic to add descriptions based on your criteria
      const descriptionMap = {
        getPetById: 'This is a Bishal.',
        addPet: 'This is a custom description for the addPet operation.',
        // Add more operationId: description pairs as needed
      };

      const operationId = props.operation.get('operationId');
      const description = descriptionMap[operationId] || '';

      return (
        <div>
          {description && <div style={{ marginBottom: '10px', fontStyle: 'italic', color: '#666' }}>{description}</div>}
          <Original {...props} />
        </div>
      );
    },
  },
});

const Swag_ger = () => {
  return <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json"  plugins={[CustomPlugin]} />;
};

export default Swag_ger;
