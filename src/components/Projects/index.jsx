import { useState } from "react";
import * as S from "./styles";
import { listProjects } from "./listProjects";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(listProjects[0]);

  const handleSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <S.Container>
      <S.LeftContainer>
        {listProjects.map((project) => {
          return (
            <S.RowCard key={project.id} onClick={() => handleSelect(project)}>
              <div>
                <S.Title>{project.title}</S.Title>
                <S.Text>{project.shortDescription}</S.Text>
              </div>
            </S.RowCard>
          );
        })}
      </S.LeftContainer>

      <S.RightContainer>
        {selectedProject ? (
          <S.Card>
            <S.Title>{selectedProject.title}</S.Title>
            <S.Avatar className="cover" src={selectedProject.cover} />
            <S.Text>{selectedProject.description}</S.Text>
            <S.Socials>{selectedProject.details}</S.Socials>
          </S.Card>
        ) : (
          <S.Card>
            <S.Title>Select a Project</S.Title>
            <S.Text>Click on a project to see its details.</S.Text>
          </S.Card>
        )}
      </S.RightContainer>

      <S.MWContainer>
        {listProjects.map((project) => {
          return (
            <S.RowCard key={project.id} onClick={() => handleSelect(project)}>
              <S.MWTop>
                <S.Avatar className="cover" src={project.cover} />
                <S.Title>{project.title}</S.Title>
              </S.MWTop>
              <S.Text>{project.shortDescription}</S.Text>
            </S.RowCard>
          );
        })}
      </S.MWContainer>
    </S.Container>
  );
}
