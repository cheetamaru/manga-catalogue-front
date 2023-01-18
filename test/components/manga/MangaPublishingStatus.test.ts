import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MangaPublishingStatus from '../../../components/manga/MangaPublishingStatus.vue'

describe('MangaPublishingStatus', () => {
  it('should render', () => {
    const component = mount(MangaPublishingStatus)
    expect(component).toBeTruthy()
  })
})
