import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProjectItem = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectTitle = styled.h3`
  padding: 10px;
  text-align: center;
  font-size: 1.2em;
  color: #333;
`;

function ProjectGrid({ projects, openProject }) {
  return (
    <Grid>
      {projects.map((project) => (
        <ProjectItem key={project.id} onClick={() => openProject(project)}>
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectTitle>{project.title}</ProjectTitle>
        </ProjectItem>
      ))}
    </Grid>
  );
}

export default ProjectGrid;