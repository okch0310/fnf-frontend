import { useContext } from 'react';

import { HierarchyContext } from '../../StyleRanking';

import CategoryHierarchy from './CategoryHierarchy';
import DomainHierarchy from './DomainHierarchy';

import { HideTree, TreeWrapper } from '../CommonStyledComponent/CommonStyle';

export default function CategoryDomain() {
  const { isExpand, handleTreeExpand } = useContext(HierarchyContext);

  return (
    <TreeWrapper isExpand={isExpand['카테고리']}>
      <HideTree name="카테고리" onClick={handleTreeExpand}>
        카테고리/도메인
      </HideTree>
      <CategoryHierarchy />
      <DomainHierarchy />
    </TreeWrapper>
  );
}
