import React from 'react';

import { ModelsWrapper, ModelSection } from "../Models";

import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <ModelSection
            className="colored"
            modelName="Model One"
            overlayNode={
              <DefaultOverlayContent 
              label="Model One"
              description="Order online"
              />
            }
          />
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
