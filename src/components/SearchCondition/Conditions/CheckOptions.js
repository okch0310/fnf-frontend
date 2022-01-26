import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DropdownIcon } from '../../../styles/icons';
import CheckElement from './CheckElement/CheckElement';
import { useRecoilState } from 'recoil';
import { filterSelect } from '../../../atom/filterSelect';

const CheckOptions = ({ filterOptions, value }) => {
  const [selectedFilterOptions, setSelectedFilterOptions] =
    useRecoilState(filterSelect);
  const [expand, setExpand] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    if (value !== 'categories') {
      if (filterOptions) {
        if (filterOptions.length === selectedFilterOptions[value].size) {
          setAllChecked(true);
        } else {
          setAllChecked(false);
        }
      }
    }
  }, [selectedFilterOptions]);

  const allCheckEvent = () => {
    const prevState = { ...selectedFilterOptions };
    if (allChecked) {
      setAllChecked(false);
      setSelectedFilterOptions(() => {
        prevState[value].clear();
        return { ...prevState };
      });
    } else {
      setAllChecked(true);
      setSelectedFilterOptions(() => {
        filterOptions.map(element => {
          prevState[value].add(element);
        });
        return { ...prevState };
      });
    }
  };

  const showOptions = () => {
    setExpand(!expand);
  };

  return (
    <MultiSelector>
      <SelectField onClick={showOptions}>
        <span>클릭확장</span>
        <DropDownImg expand={expand} />
      </SelectField>
      <OptionList expand={expand}>
        {value !== 'categories' &&
          (filterOptions ? (
            <Section>
              <ElementLabel>
                <Checkbox
                  checked={allChecked ? true : false}
                  onChange={allCheckEvent}
                />
                <ElementText>All</ElementText>
              </ElementLabel>
            </Section>
          ) : (
            <ElementText style={{ color: 'blue', fontWeight: 'bold' }}>
              제품군을 먼저 선택하세요
            </ElementText>
          ))}
        <Section>
          {filterOptions &&
            filterOptions.map((element, idx) => {
              return (
                <CheckElement
                  value={value}
                  allChecked={allChecked}
                  setAllChecked={setAllChecked}
                  selectedFilterOptions={selectedFilterOptions}
                  setSelectedFilterOptions={setSelectedFilterOptions}
                  key={idx}
                  text={element}
                />
              );
            })}
        </Section>
      </OptionList>
    </MultiSelector>
  );
};

const Section = styled.section``;

const MultiSelector = styled.div`
  position: relative;
  width: max-content;
  height: 27px;
`;

const SelectField = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #aeaeae;
  border-radius: 4px;
  background-color: white;
`;

const DropDownImg = styled(DropdownIcon)`
  transition: transform 0.5s linear;
  transform: ${props => (props.expand ? 'rotate(180deg)' : 'rotate(0deg)')};

  &:hover {
    transition: transform 1s linear;
    transform: rotate(90deg);
  }
`;

const OptionList = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  padding: 3px;
  box-shadow: 0 10px 60px rgb(0, 0, 0, 0.1);
  border: 1px solid rgb(156, 156, 156);
  border-radius: 4px;
  display: ${props => (props.expand ? 'block' : 'none')};
  background-color: white;
`;

const ElementLabel = styled.label`
  display: block;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })``;

const ElementText = styled.span``;

export default CheckOptions;
