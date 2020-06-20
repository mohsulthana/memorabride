import UploadService from '@/services/UploadService.js'

export const namespaced = true

export const state = {
  photo: []
}

export const mutations = {
  ADD_PHOTO(state, event) {
    state.photo.push(event)
  },
  SET_PHOTO(state, events) {
    state.photo = events
  }
}

export const actions = {
  srcUpload({ commit, dispatch }, event) {
    return UploadService.srcUpload(event)
      .then(() => {
        commit('ADD_PHOTO', event)
        commit('SET_PHOTO', event)
        const notification = {
          type: 'success',
          message: 'Your photo has been uploaded!'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem creating your event: ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  },
  tgtUpload({ commit, dispatch }, event) {
    return UploadService.tgtUpload(event)
      .then(() => {
        commit('ADD_PHOTO', event)
        commit('SET_PHOTO', event)
        const notification = {
          type: 'success',
          message: 'Your photo has been uploaded!'
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem creating your event: ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  }
}
