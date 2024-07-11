import React from 'react';
import styled from 'styled-components';

const DetailContainer = styled.div`
  padding: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

const ProjectTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

function ProjectDetail({ project, onClose }) {
  return (
    <DetailContainer>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectImage src={project.image} alt={project.title} />
      <ProjectDescription>{project.description}</ProjectDescription>
    </DetailContainer>
  );
}

export default ProjectDetail;