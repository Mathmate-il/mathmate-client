import { StateCreator } from 'zustand';
import Tag from '../../../model/entities/Tag';
import { TagSlice } from './tag.types';

export const createTagSlice: StateCreator<TagSlice> = (set) => ({
  allTags: [],
  setAllTags(tags: Tag[]) {
    set((state: TagSlice) => ({
      ...state,
      allTags: tags,
    }));
  },
});
