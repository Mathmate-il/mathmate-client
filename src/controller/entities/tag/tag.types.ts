import Tag from '../../../model/entities/Tag';

export interface TagSlice {
  allTags: Tag[];
  setAllTags: (tags: Tag[]) => void;
}
