"use client";
import styled from "styled-components";
import { LuBriefcase, LuBuilding2 } from "react-icons/lu";
import { GrAddCircle } from "react-icons/gr";
import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "@/ui/atoms/Input/Input";
import FormAdd from "../Form/FormAdd";
import { IHeaderProps } from "@/models/organisms/Header";
import { useModalContext } from "@/ui/contexts/ModalContext";

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

const Toggler = styled.div<{ position: string }>`
  display: flex;
  width: 100px;
  height: 100%;
  transition: 1s ease-in-out;
  align-items: center;
  translate: ${(props) => props.position};
`;

const ToggleContainer = styled.div`
  display: flex;
  width: 200px;
  height: 30px;
  transition: 1s ease-in-out;
  align-items: center;
  justify-content: start;
  background-color: ${({ theme }) => theme.colors.bgInactive};
  border-radius: 50px;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 200px;
  height: 30px;
  transition: 1s ease-in-out;
  align-items: center;
  justify-content: start;
`;

const AddButtonContainer = styled.div`
  display: flex;
  width: 150px;
  height: 30px;
  transition: 1s ease-in-out;
  align-items: center;
  justify-content: start;
`;

const Header: React.FC<IHeaderProps> = ({
  onToggleTheme,
  isView,
}) => {
  const { openModal, setModalContent } = useModalContext();

  const handleModal = () => {
    setModalContent(
      (
          <FormAdd
            isView={isView}
          />
      )
    );
    openModal()
  }

  const goLeft = isView == 'vacants' ? '0' : '-100px';
  const goRight = isView == 'vacants' ? '0' : '100px';

  return (
    <HeaderContainer>
      <HeaderSection>
        <ToggleContainer>
          <Toggler position={goRight}>
            <Button
              className="inactiveBtn"
              type="button"
              label={isView === "companies" ? 'Compañias' : 'Vacantes'}
              icon={isView === "companies" ? <LuBuilding2 /> : <LuBriefcase />}
              onClick={() => onToggleTheme()}
            />
          </Toggler>
          <Toggler position={goLeft}>
            <Button
              className="activeBtn"
              type="button"
              label={isView === "vacants" ? 'Compañias' : 'Vacantes'}
              icon={isView === "vacants" ? <LuBuilding2 /> : <LuBriefcase />}
              onClick={() => onToggleTheme()}
            />
          </Toggler>
        </ToggleContainer>
        <SearchContainer>
          <Input className="search-input" name="search" value={""} type="text" placeholder="⌕ Buscar..." />
        </SearchContainer>
      </HeaderSection>
      <HeaderSection>
        <h2>{isView === "vacants" ? 'Compañias' : 'Vacantes'}</h2>
        <AddButtonContainer>
          <Button
            className="activeBtn"
            type="button"
            label={isView === "vacants" ? 'Agregar Compañia' : 'Agregar Vacante'}
            icon={<GrAddCircle />}
            onClick={handleModal}
          />
        </AddButtonContainer>
      </HeaderSection>
    </HeaderContainer>
  );
};

export default Header;
