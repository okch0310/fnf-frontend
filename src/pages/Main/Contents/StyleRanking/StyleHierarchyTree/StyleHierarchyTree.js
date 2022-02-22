import React, { useState, useEffect, useContext } from 'react';

import { HierarchyContext } from '../StyleRanking';

import axiosInstance from '../StyleRankingAPI/baseAxios';

import styled from 'styled-components';

import CategoryDomain from './CategoryDomain/CategoryDomain';
import ItemSeason from './ItemSeason/ItemSeason';
import useTreeChecked from '../hook/useTreeChecked';

export const TreeContext = React.createContext();

export default function StyleHierarchyTree() {
  const [allTreeData, setAllTreeData] = useState();
  const { isExpand, handleTreeExpand, expandCondition } =
    useContext(HierarchyContext);

  const { treeCheckMethods } = useTreeChecked();

  useEffect(() => {
    axiosInstance({ url: 'category-list/style-ranking?brand=M' })
      .then(res => setAllTreeData(res))
      .catch(err => alert(err));
  }, []);

  return (
    <TreeWrapper isExpand={expandCondition}>
      <TreeContext.Provider value={{ treeCheckMethods, allTreeData }}>
        <CategoryDomainWrapper isExpand={isExpand}>
          {allTreeData ? (
            <>
              <CategoryDomain />
              <ItemExpand
                name="카테고리"
                onClick={handleTreeExpand}
                isExpand={isExpand['카테고리']}
              >
                카테고리
              </ItemExpand>
            </>
          ) : (
            <SkeletonExpand>카테고리</SkeletonExpand>
          )}
        </CategoryDomainWrapper>
        <ItemSeasonWrapper isExpand={isExpand}>
          {allTreeData ? (
            <>
              <ItemSeason />
              <ItemExpand
                name="아이템시즌"
                onClick={handleTreeExpand}
                isExpand={isExpand['아이템시즌']}
              >
                아이템 / 시즌
              </ItemExpand>
            </>
          ) : (
            <SkeletonExpand>아이템 / 시즌n</SkeletonExpand>
          )}
        </ItemSeasonWrapper>
      </TreeContext.Provider>
    </TreeWrapper>
  );
}

const TreeWrapper = styled.section`
  display: flex;
  flex-basis: ${props => (props.isExpand ? '22%' : '3%')};
  //flex-basis:22%;
`;

const TreeVerticalBar = styled.div`
  border: 1px solid #adadad;

  background-color: #fff;
`;

const CategoryDomainWrapper = styled(TreeVerticalBar)`
  ${props =>
    props.isExpand['카테고리']
      ? !props.isExpand['아이템시즌']
        ? 'flex-basis:95%;'
        : 'flex-basis:50%;'
      : ''}
`;

const ItemSeasonWrapper = styled(TreeVerticalBar)`
  ${props =>
    props.isExpand['아이템시즌']
      ? !props.isExpand['카테고리']
        ? 'flex-basis:95%;'
        : 'flex-basis:50%;'
      : ''}
`;

const ItemExpand = styled.span`
  writing-mode: vertical-lr;
  height: 100%;
  padding: 4px;
  &:hover {
    background-color: #ddd;
  }
  cursor: pointer;
  visibility: ${props => (!props.isExpand ? 'visible' : 'hidden')};
`;

const SkeletonExpand = styled.span`
  writing-mode: vertical-lr;
  height: 100%;
  padding: 4px;
`;
